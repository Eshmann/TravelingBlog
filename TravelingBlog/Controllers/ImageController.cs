using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Threading.Tasks;
using TravelingBlog.BusinessLogicLayer.Contracts;
using System.Collections.Generic;
using System.Security.Claims;
using System.Linq;
using System.IO;
using TravelingBlog.BusinessLogicLayer.ViewModels.DTO;
using TravelingBlog.Helpers.AzureStorage;

namespace Fiver.Azure.Blob.Client.Controllers
{
    [Route("api/upload")]
    public class ImageController : Controller
    {
        private readonly IConfiguration _configuration;
        private readonly ClaimsPrincipal caller;
        readonly IUnitOfWork unitOfWork;
        public IAzureBlob azureBlob;
        private string AzureConnectionString { get; }
        public ImageController(IConfiguration configuration, IUnitOfWork unitOfWork, IHttpContextAccessor httpContextAccessor, IAzureBlob azureBlob)
        {
            caller = httpContextAccessor.HttpContext.User;
            _configuration = configuration;
            AzureConnectionString = _configuration.GetConnectionString("StorageConnectionString");
            this.unitOfWork = unitOfWork;
            this.azureBlob = azureBlob;
        }

        [HttpPost]
        public async Task<IActionResult> UploadImage(IList<IFormFile> files)
        {
            var userId = caller.Claims.Single(c => c.Type == "id");
            var user = await unitOfWork.Users.GetUserByIdentityId(userId.Value);
            var imagesPathes = new List<string>();

            if (!azureBlob.CheckFile(files))
                return BadRequest("eroor");

            foreach (var formFile in files)
            {
                if (formFile.Length <= 0)
                {
                    continue;
                }
                using (var ms = new MemoryStream())
                {
                    formFile.CopyTo(ms);
                    var fileBytes = ms.ToArray();
                    var container = azureBlob.GetBlobContainer(AzureConnectionString, user.Id.ToString());
                    var blockBlob = azureBlob.GetBlockBlobAsync(formFile.FileName, container, fileBytes);
                    string path = await blockBlob;

                    imagesPathes.Add(path);
                }
            }
            var imageDTOList = new List<ImageDTO>();

            for (var i = 0; i < imagesPathes.Count; i++)
            {
                imageDTOList.Add(new ImageDTO { Path = imagesPathes[i] });
            }

            return Ok(imageDTOList);
        }
    }
}
