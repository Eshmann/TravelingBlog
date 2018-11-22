using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using TravelingBlog.DataAcceesLayer.Data;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TravelingBlog.BusinessLogicLayer.Contracts;

namespace TravelingBlog.Controllers
{
    [Authorize(Policy = "ApiUser")]
    [Route("api/[controller]/[action]")]
    public class DashboardController : Controller
    {
        private readonly ClaimsPrincipal caller;
        private readonly IUnitOfWork unitOfWork;
        private readonly ApplicationDbContext context;

        public DashboardController(ApplicationDbContext context, UserManager<AppUser> userManager, IUnitOfWork unitOfWork, IHttpContextAccessor httpContextAccessor)
        {
            this.caller = httpContextAccessor.HttpContext.User;
            this.unitOfWork = unitOfWork;
            this.context = context;
        }

        // GET api/dashboard/home
        [HttpGet]
        public async Task<IActionResult> Home()
        {
            // retrieve the user info
            // HttpContext.User
            var userId = caller.Claims.Single(c => c.Type == "id");
            var customer = unitOfWork.Users.Include(c => c.Identity).SingleOrDefault(c => c.Identity.Id == userId.Value);
            //var customer = await context.UserInfoes.Include(c => c.Identity).SingleAsync(c => c.Identity.Id == userId.Value);

            return new OkObjectResult(new
            {
                Message = "This is secure API and user data!",
                customer.FirstName,
                customer.LastName,
                customer.Identity.PictureUrl,
                customer.Identity.FacebookId
            });
        }
    }
}