using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Security.Claims;
using TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts;
using TravelingBlog.BusinessLogicLayer.SecondaryServices.LoggerService;
using TravelingBlog.DataAcceesLayer.Data;
using TravelingBlog.Models;
using TravelingBlog.Models.Filters;
using TravelingBlog.Models.ViewModels.DTO;

namespace TravelingBlog.Controllers
{
    [Route("api/[controller]")]
    public class TripController : BaseController<TripDTO, TripFilter>
    {
        protected readonly ITripService tripService;
        protected readonly ILoggerManager logger;
        private readonly ClaimsPrincipal caller;

        public TripController( ITripService tripService, ILoggerManager logger, IHttpContextAccessor httpContextAccessor)
            : base(tripService)
        {
            this.tripService = tripService;
            this.logger = logger;
            caller = httpContextAccessor.HttpContext.User;
        }
        
        [HttpGet("usertrips/{id}")]
        public IActionResult GetUserTrips(int id)
        {
            return Ok(tripService.GetUserTrips(id));
        }

        [AllowAnonymous]
        [HttpGet("mytrips")]
        public IActionResult GetMyTrips()
        {
            var userId = caller.Claims.Single(c => c.Type == "id");

            return Ok(tripService.GetUserTrips(userId.Value));
        }

        [AllowAnonymous]
        [HttpGet("GetTripsPagination")]
        public IActionResult GetTripsPage(PagingModel paging)
        {
            var trips = tripService.GetTripsPage(paging, out var total);
            
            logger.LogInfo("Return all trips from database");

            return Ok(new { Total = total, Trips = trips });
        }

        [AllowAnonymous]
        [HttpGet("GetTripWithPosts/{id}", Name = "GetTripWithPost")]
        public IActionResult GetTripWithPostBlogs(TripFilter filter)
        {
            var tripWithBlogs = tripService.GetTripWithPostBlogs(filter);
            logger.LogInfo("Return trip with postblogs");

            return Ok(tripWithBlogs);
        }

        
        [AllowAnonymous]
        [HttpGet("bestTrip")]
        public IActionResult GetTripsWithHighestRating()
        {
            var trips = tripService.GetTripsWithHighestRating();

            return Ok(trips);
        }
    }
}
