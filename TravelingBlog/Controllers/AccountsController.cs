using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.DataAcceesLayer.Repositories.Contracts;
using TravelingBlog.Helpers;
using TravelingBlog.Models.ViewModels;

namespace TravelingBlog.Controllers
{
    [Route("api/[controller]")]
    public class AccountsController : Controller
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly UserManager<AppUser> userManager;
        private readonly IMapper mapper;

        public AccountsController(UserManager<AppUser> userManager, IMapper mapper, IUnitOfWork unitOfWork)
        {
            this.userManager = userManager;
            this.mapper = mapper;
            this.unitOfWork = unitOfWork;
        }

        // POST api/accounts
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]RegistrationViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userIdentity = mapper.Map<AppUser>(model);

            var result = await userManager.CreateAsync(userIdentity, model.Password);

            if (!result.Succeeded)
                return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));

            unitOfWork.GetRepository<UserInfo>().Add(new UserInfo { IdentityId = userIdentity.Id, FirstName=model.FirstName, LastName=model.LastName });
            unitOfWork.Complete();

            return new OkObjectResult("Account created");
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserInfo(int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // UserInfo user = await unitOfWork.Users.GetUserByIdAsync(id);
            UserInfo user = unitOfWork.GetRepository<UserInfo>().Get(id);

            if (user == null)
            {
                return NotFound();
            }

            AppUser picture = await userManager.FindByIdAsync(user.IdentityId);

            string countryName = string.Empty;
            if (user.CountryId != null)
            {
                //Country a = await unitOfWork.Countries.GetCountryByIdAsync(int.Parse(user.CountryId.ToString()));
                Country a = unitOfWork.GetRepository<Country>().Get(int.Parse(user.CountryId.ToString()));
                countryName = a.Name;
            }

            var UserInfo = new UserInfoWithImage
            {
                firstName = user.FirstName,
                lastName = user.LastName,
                location = countryName,
                pictureUrl = picture.PictureUrl
            };

            return Ok(UserInfo);
        }
    }
}