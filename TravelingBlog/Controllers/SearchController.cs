using System;
using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TravelingBlog.BusinessLogicLayer.Contracts;
using TravelingBlog.BusinessLogicLayer.ResourceHelpers;
using TravelingBlog.BusinessLogicLayer.ResourseHelpers;
using TravelingBlog.BusinessLogicLayer.ViewModels.DTO;

namespace TravelingBlog.Controllers
{
    [Route("api/[controller]")]
    public class SearchController : Controller
    {
        public IUnitOfWork UnitOfWork { get; set; }
        private ILoggerManager Logger { get; set; }

        public SearchController(IUnitOfWork unitOfWork, ILoggerManager logger, IHttpContextAccessor httpContextAccessor)
        {
            UnitOfWork = unitOfWork;
            Logger = logger;
        }


        [HttpGet("search")]
        [AllowAnonymous]
        public IActionResult GetTripsBySearchResult([FromQuery] Search search)
        {
            try
            {
                var result = UnitOfWork.Trips.SearchTrips(search, out var total);
                Logger.LogInfo("Search success");
                if (result == null)
                {
                    var noresult = UnitOfWork.Trips.GetAllTripsAsync(search, out var h);
                    Logger.LogInfo("Bad search line");
                    return Ok(new {total = h, Result = noresult});
                }
                return Ok(new { Total = total,Result = result });
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return StatusCode(500);
            }

        }

        [HttpGet("filter")]
        [AllowAnonymous]
        public IActionResult TryFilter([FromQuery]Filter filter)
        {
            try
            {
                var result = UnitOfWork.Trips.FilterTripsByCountry(filter, out var total);
                Logger.LogInfo("Filter");
                return Ok(new { Total = total, Result = result, });
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return StatusCode(500);
            }
          
        }
    }
}