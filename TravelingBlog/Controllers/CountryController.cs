using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.Models.Filters;
using TravelingBlog.Models.ViewModels.DTO;

namespace TravelingBlog.Controllers
{
    [Route("api/[controller]")]
    public class CountryController : BaseController<CountryDTO, CountryFilter>
    {
        public CountryController(ICountryService service)
            : base(service)
        {

        }
    }
}