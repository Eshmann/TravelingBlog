using Microsoft.AspNetCore.Http;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TravelingBlog.Helpers.AzureStorage
{
    public class AzureBlob : IAzureBlob
    {
        private readonly string[] supportedTypes = { "image/png", "image/jpeg", "image/jpg" };
        public CloudBlobContainer GetBlobContainer(string azureConnectionString, string containerName)
        {
            var storageAccount = CloudStorageAccount.Parse(azureConnectionString);
            var blobClient = storageAccount.CreateCloudBlobClient();
            return blobClient.GetContainerReference("userid" + containerName);
        }

        public async Task<string> GetBlockBlobAsync(string blockName, CloudBlobContainer container, byte[] imageBuffer)
        {
            CloudBlockBlob blockBlob = container.GetBlockBlobReference(Guid.NewGuid().ToString() + "_" + blockName);
            await container.CreateIfNotExistsAsync();

            BlobContainerPermissions permissions = new BlobContainerPermissions
            {
                PublicAccess = BlobContainerPublicAccessType.Blob
            };
            await container.SetPermissionsAsync(permissions);

            if (imageBuffer != null)
            {
                await blockBlob.UploadFromByteArrayAsync(imageBuffer, 0, imageBuffer.Length);
            }

            return blockBlob.StorageUri.PrimaryUri.AbsolutePath;
        }

        public bool CheckFile(IList<IFormFile> files)
        {
            bool message = false;
            for (int i = 0; i < files.Count; i++)
            {
                if (files.Count > 8)
                {
                    message = false;
                    break;
                }
                string ex = files[i].ContentType.ToString();
                for (int j = 0; j < supportedTypes.Length; j++)
                {
                    if (ex == supportedTypes[j])
                    {
                        message = true;
                        break;
                    }
                    message = false;
                }
            }
            return message;
        }
    }
}