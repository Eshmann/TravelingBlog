using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using TravelingBlog.BusinessLogicLayer.SecondaryServices.LoggerService;
using TravelingBlog.BusinessLogicLayer.ViewModels.DTO;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.Controllers
{
    [Route("api/[controller]")]
    //[ApiController]
    [Authorize]
    public class PostBlogController : Controller
    {
        private readonly ClaimsPrincipal caller;
        private ILoggerManager logger;
        private IUnitOfWork unitOfWork;

        public PostBlogController(ILoggerManager _logger, IUnitOfWork _unitOfWork, IHttpContextAccessor httpContextAccessor)
        {
            logger = _logger;
            unitOfWork = _unitOfWork;
            caller = httpContextAccessor.HttpContext.User;
        }

        [AllowAnonymous]
        [HttpGet]
        public async Task<IActionResult> GetAllBlogs()
        {
            try
            {
                var blog = await unitOfWork.PostBlogs.GetAllPostBlogsAsync();
                if (blog == null)
                {
                    logger.LogInfo("TripsNotFound");
                    return NotFound();
                }
                logger.LogInfo("Return all trips from database");
                return Ok(blog);
            }
            catch (Exception ex)
            {
                logger.LogError($"Something went wrong inside GetAllBlogs;{ex.Message}");
                return StatusCode(500, "Internal Server Error");
            }

        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetBlog(int id)
        {
            try
            {
                var blog = await unitOfWork.PostBlogs.GetPostBlogByIdAsync(id);
                if (blog == null)
                {
                    logger.LogInfo("TripNotFound");
                    return NotFound();
                }
                logger.LogInfo("Return trip with id=" + id);
                return Ok(blog);
            }
            catch (Exception ex)
            {
                logger.LogError($"Something went wrong inside GetAllBlogs by Id;{ex.Message}");
                return StatusCode(500, "Internal Server Error");
            }

        }

        [HttpPost]
        public async Task<IActionResult> AddBlogAsync([FromBody]PostBlogDTO model)
        {
            try
            {
                var post = new PostBlog
                {
                    Name = model.Name,
                    DateOfCreation = model.DateOfCreation,
                    Plot = model.Plot
                };
                var userId = caller.Claims.Single(c => c.Type == "id");
                //var customer = await appDbContext.UserInfoes.Include(c => c.Identity).SingleAsync(c => c.Identity.Id == userId.Value);
                var user = await unitOfWork.Users.GetUserByIdentityId(userId.Value);
                var trip = await unitOfWork.Trips.GetTripByIdAsync(model.TripId);

                var isUserCreator = unitOfWork.Trips.IsUserCreator(user.Id, trip.Id);
                if (!isUserCreator)
                {
                    return Forbid();
                }
                post.Trip = trip;
                unitOfWork.PostBlogs.Add(post);
                logger.LogInfo($"Add some post");
                return Ok(model);
            }
            catch (Exception ex)
            {
                logger.LogError($"Something went wrong inside AddBlogAsync;{ex.Message}");
                return StatusCode(500, "Internal Server Error");
            }

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> AsyncDeleteBlog(int id)
        {
            try
            {
                var userId = caller.Claims.Single(c => c.Type == "id");
                var user = await unitOfWork.Users.GetUserByIdentityId(userId.Value);
                var post = await unitOfWork.PostBlogs.GetPostBlogByIdAsync(id);
                var trip = await unitOfWork.Trips.GetTripByIdAsync(post.TripId);

                var isUserCreator = unitOfWork.Trips.IsUserCreator(user.Id, trip.Id);
                if (!isUserCreator)
                {
                    return Forbid();
                }

                unitOfWork.PostBlogs.Remove(post);
                logger.LogInfo($"Post id {id} deleted");
                return Ok(post);
            }
            catch (Exception ex)
            {
                logger.LogError($"Something went wrong inside AsyncDeleteBlog;{ex.Message}");
                return StatusCode(500, "Internal Server Error");
            }

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> AsyncUpdateBlog(int id, [FromBody]PostBlogDTO model)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest();
                }
                var userId = caller.Claims.Single(c => c.Type == "id");
                var user = await unitOfWork.Users.GetUserByIdentityId(userId.Value);
                var trip = unitOfWork.Trips.GetTripWithPostBlogs(model.TripId);
                var isUserCreator = unitOfWork.Trips.IsUserCreator(user.Id, trip.Id);
                if (!isUserCreator)
                {
                    return Forbid();
                }
                var post = await unitOfWork.PostBlogs.GetPostBlogByIdAsync(id);
                if (post == null)
                {
                    return NotFound();
                }

                post.Name = model.Name;
                post.Plot = model.Plot;

                unitOfWork.PostBlogs.Update(post);
                logger.LogInfo($"Post{id} - {model.Name} updated ");
                return Ok(post);
            }
            catch (Exception ex)
            {
                logger.LogError($"Something went wrong inside AsyncUpdateBlog;{ex.Message}");
                return StatusCode(500, "Internal Server Error");
            }
        }
    }
}
