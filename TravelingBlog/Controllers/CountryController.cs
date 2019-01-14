using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts;
using TravelingBlog.Models.Filters;
using TravelingBlog.Models.ViewModels.DTO;

namespace TravelingBlog.Controllers
{
    [Authorize(Policy = "RequireModeratorAndAdmin")]
    [Route("api/[controller]")]
    public class CountryController : BaseController<CountryDTO, CountryFilter>
    {
        public CountryController(ICountryService service)
            : base(service)
        {

        }
    }
}