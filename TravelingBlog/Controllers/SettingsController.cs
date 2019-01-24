using AutoMapper.Configuration;
using Microsoft.AspNetCore.Authorization;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts;
using TravelingBlog.BusinessLogicLayer.SecondaryServices.AzureStorage;
using TravelingBlog.BusinessLogicLayer.SecondaryServices.LoggerService;
using TravelingBlog.Models;
using TravelingBlog.Models.Filters;
using TravelingBlog.Models.ViewModels.DTO;
using Microsoft.AspNetCore.Http.Internal;
using System.Net.Http.Headers;
using Microsoft.Extensions.Options;
using TravelingBlog.Models.AuthModels;

namespace TravelingBlog.Controllers
{
    [Route("api/[controller]")]
    public class SettingsController  : BaseController<SettingDTO, BaseFilter>
    {
        protected readonly ISettingsService settingsService;
        private ILoggerManager logger;
        private ClaimsPrincipal caller;
        public IAzureBlob azureBlob;
        public readonly BlobConnection blob;

        public SettingsController(ISettingsService settingsService, ILoggerManager logger, IHttpContextAccessor httpContextAccessor, IAzureBlob azureBlob, IOptions<BlobConnection> options)
            : base(settingsService)
        {
            this.settingsService = settingsService;            
            this.logger = logger;
            caller = httpContextAccessor.HttpContext.User;
            this.azureBlob = azureBlob;
            this.blob = options.Value;  
        }


        [HttpPut]
        [Route("editusername")]
        public IActionResult EditUserName([FromBody]SettingDTO settingDTO)
        {
            var userId = caller.Claims.Single(c => c.Type == "id");
            settingDTO.Id = userId.Value;
            settingsService.EditUserName(settingDTO);
            return Ok();
        }

        [HttpPost]
        [Route("upload")]
        public async Task<IActionResult> EditPhoto(IList<IFormFile> files)//UserPhotoDTO userPhotoDTO
        {
            #region ff
            SettingDTO settingDTO = new SettingDTO();
            var userId = caller.Claims.Single(c => c.Type == "id");
            var user = settingDTO.Id = userId.Value;
            var imagesPathes = new List<string>();

            //if (!azureBlob.CheckFile(settingDTO.formFile))
            //    return BadRequest("eroor");

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
                    var container = azureBlob.GetBlobContainer(blob.StorageConnectionString, userId.Value);
                    var blockBlob = azureBlob.GetBlockBlobAsync(formFile.FileName, container, fileBytes);
                    string path = await blockBlob;

                    imagesPathes.Add(path);
                }
            }
            var imageDTOList = new List<SettingDTO>();

            for (var i = 0; i < imagesPathes.Count; i++)
            {
                settingDTO.PhotoUser = imagesPathes[i];
            }
            settingsService.EditPhoto(settingDTO);
            #endregion
            return Ok(true);
        }
    }
}
