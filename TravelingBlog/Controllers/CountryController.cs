using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TravelingBlog.BusinessLogicLayer.Contracts;
using TravelingBlog.BusinessLogicLayer.Repositories;
using TravelingBlog.BusinessLogicLayer.ViewModels.DTO;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.Controllers
{
    [Route("api/[controller]")]
    public class CountryController : Controller
    {
        public ILoggerManager loggerManager;

        public IUnitOfWork unitOfWork;
        public CountryController(ILoggerManager loggerManager, IUnitOfWork unitOfWork)
        {
            this.loggerManager = loggerManager;
            this.unitOfWork = unitOfWork;
        }


        [HttpGet]
        public async Task<IActionResult> GetAllCountries()
        {
            var countries = await unitOfWork.Countries.GetAllCountriesAsync();
            if(countries == null)
            {
                loggerManager.LogInfo("Countries not found in DB");
                return NotFound();
            }
            loggerManager.LogInfo("Returning all countries from DB");
            return Ok(countries);
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetCountryById( int id)
        {
            var country = await unitOfWork.Countries.GetCountryByIdAsync(id);
            if (country == null)
            {
                loggerManager.LogInfo("Country is not found in DB");
                return NotFound();
            }
            loggerManager.LogInfo(String.Format("Returning country with id  = {0} from DB", id));
            return Ok(country);
        }


        // [Authorize(Roles = "moderator")]
        [HttpPost]
        public IActionResult AddCountry([FromBody]CountryDTO model)
        {
            var country = new Country
            {
                Name = model.Name, MobCode = model.MobCode
            };

            unitOfWork.Countries.Add(country);
            loggerManager.LogInfo("Adding new country " + model.Name);
            return Ok(model);
        }
    }
}
