using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts;
using TravelingBlog.BusinessLogicLayer.SecondaryServices.LoggerService;
using TravelingBlog.Models;
using TravelingBlog.Models.Filters;
using TravelingBlog.Models.ViewModels.DTO;

namespace TravelingBlog.Controllers
{
    [Route("api/[controller]")]
    public class SettingsController  : BaseController<SettingDTO, BaseFilter>
    {
        protected readonly ISettingsService settingsService;
        private ILoggerManager logger;
        private ClaimsPrincipal caller;

        public SettingsController(ISettingsService settingsService, ILoggerManager logger, IHttpContextAccessor httpContextAccessor)
            : base(settingsService)
        {
            this.settingsService = settingsService;
            this.logger = logger;
            caller = httpContextAccessor.HttpContext.User;
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
    }
}
