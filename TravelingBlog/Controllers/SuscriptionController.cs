using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts;
using TravelingBlog.BusinessLogicLayer.SecondaryServices.LoggerService;
using TravelingBlog.Models.Filters;
using TravelingBlog.Models.ViewModels.DTO;

namespace TravelingBlog.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class SubscriptionController : Controller
    {
        protected readonly ISubscriptionService subscriptionService;
        protected readonly ILoggerManager logger;
        private readonly ClaimsPrincipal caller;

        public SubscriptionController(ISubscriptionService subscriptionService, ILoggerManager logger, IHttpContextAccessor httpContextAccessor)
        {
            this.subscriptionService = subscriptionService;
            this.logger = logger;
            caller = httpContextAccessor.HttpContext.User;
        }

        [HttpGet]
        [Route("getMySubscription")]
        public IActionResult GetUserSubscription()
        {
            var userId = caller.Claims.Single(c => c.Type == "id");
            var subs = subscriptionService.GetUserSubscription(userId.Value);
            return Ok(subs);
        }
        [HttpPost]
        [Route("subscribeTo/{id}")]
        public IActionResult SubscribeTo(int id)
        {
            var userId = caller.Claims.Single(c => c.Type == "id");
            var subs = subscriptionService.SubscribeTo(userId.Value, id);
            return Ok(subs);
        }
        [HttpDelete]
        [Route("unsubscribeFrom/{id}")]
        public IActionResult UnSubscribeFrom(int id)
        {
            var userId = caller.Claims.Single(c => c.Type == "id");
            var subs = subscriptionService.UnSubscribeFrom(userId.Value, id);
            return Ok(subs);
        }
    }
}
