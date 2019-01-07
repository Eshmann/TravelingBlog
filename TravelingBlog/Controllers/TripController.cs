using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using TravelingBlog.ActionFilters;
using TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts;
using TravelingBlog.BusinessLogicLayer.SecondaryServices.LoggerService;
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

        [AllowAnonymous]
        [HttpGet("GetTripsPagination")]
        public IActionResult GetTripsPage(PagingModel paging)
        {
            var trips = tripService.GetTripsPage(paging, out var total);

            if (trips == null)
            {
                logger.LogInfo("TripsNotFound");
                return NotFound();
            }

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


        [Route("add")]
        [HttpPost]
        [ServiceFilter(typeof(ValidationFilterAttribute))]
        public override IActionResult Post([FromBody]TripDTO model)
        {
            if (model == null)
            {
                logger.LogError($"Object sent from client is null");
                return BadRequest("Trip object is null");
            }

            var userId = caller.Claims.Single(c => c.Type == "id");

            tripService.Add(model);

            return Ok(model);
        }
    }
}
