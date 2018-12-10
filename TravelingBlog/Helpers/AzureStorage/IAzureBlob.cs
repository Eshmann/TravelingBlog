using Microsoft.AspNetCore.Http;
using Microsoft.WindowsAzure.Storage.Blob;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TravelingBlog.Helpers.AzureStorage
{
    public interface IAzureBlob
    {
        CloudBlobContainer GetBlobContainer(string connectionString, string containerName);
        Task<string> GetBlockBlobAsync(string blockName, CloudBlobContainer container, byte[] imageBuffer);
        bool CheckFile(List<IFormFile> files);
    }
}
