using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using TravelingBlog.BusinessLogicLayer.Contracts;
using TravelingBlog.BusinessLogicLayer.ViewModels.DTO;
using TravelingBlog.Services.BlobContainer;

namespace TravelingBlog.Controllers
{
    [Route("api/upload")]
    public class ImagesController : Controller
    {
        private readonly ClaimsPrincipal caller;
        private readonly IUnitOfWork unitOfWork;
        private IConfiguration configuration;

        public ImagesController(IHttpContextAccessor httpContextAccessor, IUnitOfWork unitOfWork, IConfiguration Configuration)
        {
            caller = httpContextAccessor.HttpContext.User;
            configuration = Configuration;
            this.unitOfWork = unitOfWork;
        }

        [HttpPost]
        public async Task<IActionResult> AddImages(List<IFormFile> files)
        {
            var connectionStr = configuration.GetConnectionString("StorageConnectionString");
            var userId = caller.Claims.Single(c => c.Type == "id");
            var user = await unitOfWork.Users.GetUserByIdentityId(userId.Value);
            var imagesPathes = new List<string>();

            if (files.Count > 8)
            {
                return BadRequest("too much files");
            }
            for (int i = 0; i < files.Count; i++)
            {
                if (files[i].Length > 10485760)
                    return BadRequest("Tyagelo");
            }

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

                    string path = await StorageImages.UploadToBlob(user.Id, formFile.FileName, connectionStr, fileBytes, null);
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
