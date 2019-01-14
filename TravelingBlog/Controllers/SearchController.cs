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
using TravelingBlog.Models;
using TravelingBlog.Models.Filters;
using TravelingBlog.Models.ViewModels.DTO;

namespace TravelingBlog.Controllers
{
    [Route("api/[controller]")]
    public class SearchController : Controller
    {
        protected readonly ISearchService searchService;
        protected readonly ILoggerManager logger;
        private readonly ClaimsPrincipal caller;

        public SearchController(ISearchService searchService, ILoggerManager logger, IHttpContextAccessor httpContextAccessor)
        {
            this.searchService = searchService;
            this.logger = logger;
            caller = httpContextAccessor.HttpContext.User;
        }

        [AllowAnonymous]
        [HttpGet("search")]
        public IActionResult Search([FromQuery]Search search)
        {
            var query = searchService.SearchTrips(search, out var total);
            logger.LogInfo($"Someone search trip : {search}");
            return Ok(new {Total = total, Result = query});
        }

        [AllowAnonymous]
        [HttpGet("filter")]
        public IActionResult FilterTrips([FromQuery]Filter filter)
        {
            var filtering = searchService.FilterTripsByCountry(filter, out var total);
            logger.LogInfo($"Someone filter by id country {filter}");
            return Ok(new {Total = total, Result = filtering});
        }
    }
}