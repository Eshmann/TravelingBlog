using System.Collections.Generic;
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.UI.Pages.Account.Internal;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Moq;
using TravelingBlog.BusinessLogicLayer.ModelsServices;
using TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts;
using TravelingBlog.BusinessLogicLayer.SecondaryServices.Auth;
using TravelingBlog.Controllers;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.Models.AuthModels;
using TravelingBlog.Models.ViewModels.DTO;
using Xunit;

namespace XUnitTest.ControllerTest
{
    public class CountryControllerTest
    {
        [Fact]
        public void GetCountriesFromController()
        {
            // Arrange
            var countries = new List<CountryDTO>()
            {
                new CountryDTO
                {
                    Id = 1,
                    Name = "Ukraine",
                    MobCode = "+380"
                }

            };
            
            var mockCountryService = new Mock<ICountryService>();
            mockCountryService.Setup(x => x.GetAll()).Returns(countries);
            var controller = new CountryController(mockCountryService.Object);

            //Act
            var result = controller.GetAll();

            //Assert
            Assert.IsType<OkObjectResult>(result);
        }
    }
}
