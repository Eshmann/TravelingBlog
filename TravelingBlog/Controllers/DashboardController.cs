using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts;
using TravelingBlog.DataAcceesLayer.Models.Entities;


namespace TravelingBlog.Controllers
{
    [Authorize(Policy = "ApiUser")]
    [Route("api/[controller]/[action]")]
    public class DashboardController : Controller
    {
        private readonly ClaimsPrincipal caller;

        private readonly IUserService _userService;

        public DashboardController(UserManager<AppUser> userManager, IHttpContextAccessor httpContextAccessor, IUserService userService)
        {
            caller = httpContextAccessor.HttpContext.User;
            _userService = userService;
        }

        // GET api/dashboard/home
        [HttpGet]
        public async Task<IActionResult> Home()
        {
            var userId = caller.Claims.Single(c => c.Type == "id");

            var user = await _userService.GetUserInfoIncludingIdentity(userId.Value);                   

            return new OkObjectResult(new
            {
                Message = "This is secure API and user data!",
                user.FirstName,
                user.LastName,
                PictureUrl = user.UserImage==null?null:user.UserImage.Path,
                user.Identity.FacebookId
            });
        }
    }
}