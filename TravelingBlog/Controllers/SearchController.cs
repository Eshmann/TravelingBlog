using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TravelingBlog.BusinessLogicLayer.Contracts;
using TravelingBlog.BusinessLogicLayer.ResourseHelpers;

namespace TravelingBlog.Controllers
{
    [Route("api/[controller]")]
    public class SearchController : Controller
    {
        public IUnitOfWork UnitOfWork { get; set; }
        private ILoggerManager Logger { get; set; }

        private readonly ClaimsPrincipal _caller;

        public SearchController(IUnitOfWork _unitOfWork, ILoggerManager _logger, IHttpContextAccessor httpContextAccessor)
        {
            UnitOfWork = _unitOfWork;
            Logger = _logger;
            _caller = httpContextAccessor.HttpContext.User;
        }


        [HttpGet]
        [AllowAnonymous]
        public IActionResult GetTripsBySearchResult([FromQuery] Search search)
        {
            try
            {
                var result = UnitOfWork.Trips.SearchTrips(search);
                Logger.LogInfo("Search success");
                if (result == null)
                {
                    var noresult =  UnitOfWork.Trips.GetAllTripsAsync(search, out var total);
                    Logger.LogInfo("Bad search line");
                    return Ok(noresult);
                }
                return Ok(result);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return StatusCode(500);
            }

        }
    }
}