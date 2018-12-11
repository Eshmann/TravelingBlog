using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using TravelingBlog.BusinessLogicLayer.Contracts;
using TravelingBlog.BusinessLogicLayer.LoggerService;
using TravelingBlog.BusinessLogicLayer.ViewModels.DTO;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.Helpers.AzureStorage;

namespace Fiver.Azure.Blob.Client.Controllers
{
    [Route("api/[controller]")]
    public class ImageController : Controller
    {
        private readonly IConfiguration _configuration;
        private readonly ClaimsPrincipal caller;
        private readonly ILoggerManager logger;
        readonly IUnitOfWork unitOfWork;
        public IAzureBlob azureBlob;
        private string AzureConnectionString { get; }

        public ImageController(ILoggerManager logger, IConfiguration configuration, IUnitOfWork unitOfWork, IHttpContextAccessor httpContextAccessor, IAzureBlob azureBlob)
        {
            caller = httpContextAccessor.HttpContext.User;
            _configuration = configuration;
            AzureConnectionString = _configuration.GetConnectionString("StorageConnectionString");
            this.unitOfWork = unitOfWork;
            this.azureBlob = azureBlob;
            this.logger = logger;
        }

        [Route("random")]
        [HttpGet]
        public IActionResult GetRandom()
        {
            var trips = unitOfWork.Trips.GetTripsWithHighestRating(20);
            var randomTrips = unitOfWork.Trips.GetRandomTrips(8, trips.ToList());
            var images = new List<Image>();

            for (var i = 0; i < 8; i++)
            {
                images.Add(unitOfWork.Images.GetRandomImage(randomTrips.ElementAt(i)));
            }

            return Ok(images);
        }

        [Route("upload")]
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
