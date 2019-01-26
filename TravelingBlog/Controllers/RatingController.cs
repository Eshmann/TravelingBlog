using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TravelingBlog.ActionFilters;
using TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts;
using TravelingBlog.BusinessLogicLayer.SecondaryServices.LoggerService;
using TravelingBlog.Models;
using TravelingBlog.Models.Filters;
using TravelingBlog.Models.ViewModels.DTO;

namespace TravelingBlog.Controllers
{
    [AllowAnonymous]
    [Route("api/[controller]")]
    public class RatingController : Controller
    {
        private readonly ClaimsPrincipal caller;
        public IRatingService ratingService;

        public RatingController(IRatingService ratingService, IHttpContextAccessor httpContextAccessor)
        {
            caller = httpContextAccessor.HttpContext.User;
            this.ratingService = ratingService;
        }

        [HttpPost("add")]
        [Authorize]
        public IActionResult AddRating([FromBody]RatingDTO ratingDTO)
        {
            var userId = caller.Claims.Single(c => c.Type == "id");
            ratingService.AddRating(ratingDTO, userId.Value);
            return Ok(ratingDTO);
        }
    }
}