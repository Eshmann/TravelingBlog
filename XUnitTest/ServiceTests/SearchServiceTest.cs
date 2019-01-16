using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using AutoMapper;
using Moq;
using TravelingBlog.BusinessLogicLayer.ModelsServices;
using TravelingBlog.BusinessLogicLayer.SecondaryServices.LoggerService;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.DataAcceesLayer.Repositories.Contracts;
using TravelingBlog.Models;
using TravelingBlog.Models.ViewModels.DTO;
using Xunit;

namespace XUnitTest.ServiceTests
{
    public class SearchServiceTest
    {
        private readonly List<Trip> _trips;

        public SearchServiceTest()
        {
            _trips = new List<Trip>
            {
                new Trip
                {
                    Id = 1,
                    Name = "Trip 1 testing",
                    IsDone = false,
                    UserInfoId = 1,
                    Description = "Trip description 1",
                    CountryTrips = new List<CountryTrip>
                    {
                        new CountryTrip
                        {
                            TripId = 1, CountryId = 1, Country = new Country
                            {
                                Id = 1, Name = "Ukraine"
                            }
                        }
                    },
                    UserInfo = new UserInfo()
                    {

                    }
                },
                new Trip {Id = 2,
                    Name = "Trip 2 testing",
                    IsDone = false,
                    UserInfoId = 1,
                    Description = "Trip description 2",
                    CountryTrips = new List<CountryTrip>
                    {
                        new CountryTrip
                        {
                            TripId = 1, CountryId = 1, Country = new Country
                            {
                                Id = 1, Name = "Ukraine"
                            }
                        }
                    },
                    UserInfo = new UserInfo()
                    {

                    }
                },
                new Trip {Id = 3,
                    Name = "Trip 2 testing",
                    IsDone = false,
                    UserInfoId = 1,
                    Description = "Trip description 3" ,
                    CountryTrips = new List<CountryTrip>
                    {
                        new CountryTrip
                        {
                            TripId = 1, CountryId = 1, Country = new Country
                            {
                                Id = 1, Name = "Ukraine"
                            }
                        }
                    },
                    UserInfo = new UserInfo()
                    {

                    }
                }
            };
        }
/*
        [Fact]
        public void SearchTrip()
        {

            //Arrange
            Mock<IUnitOfWork> mockUnitOfWork = new Mock<IUnitOfWork>();
            Mock<IRepository<Trip>> tripRepository = new Mock<IRepository<Trip>>();
            tripRepository.Setup(x => x.GetAll()).Returns(_trips.AsQueryable());
            mockUnitOfWork.Setup(m => m.GetRepository<Trip>()).Returns(tripRepository.Object);
            Mock<ILoggerManager> loggerMock = new Mock<ILoggerManager>();
            Mock<IMapper> mapper = new Mock<IMapper>();
            SearchService searchService = new SearchService(mockUnitOfWork.Object, loggerMock.Object, mapper.Object);
            var query = new Mock<Search>();
            query.Object.SearchQuery = "testing";
            //Act 

            IList<TripWithUserDTO> tripWithUser = searchService.SearchTrips(query.Object, out var total);

            //Assert
            Assert.NotNull(tripWithUser);
            Assert.Equal(total, tripWithUser.Count);
        }

        [Fact]
        public void FilterByCountry()
        {
            //Arrange
            Mock<IUnitOfWork> mockUnitOfWork = new Mock<IUnitOfWork>();
            Mock<IRepository<Trip>> tripRepository = new Mock<IRepository<Trip>>();
            tripRepository.Setup(x => x.GetAll()).Returns(_trips.AsQueryable());
            mockUnitOfWork.Setup(m => m.GetRepository<Trip>()).Returns(tripRepository.Object);
            Mock<ILoggerManager> loggerMock = new Mock<ILoggerManager>();
            Mock<IMapper> mapper = new Mock<IMapper>();
            SearchService searchService = new SearchService(mockUnitOfWork.Object, loggerMock.Object, mapper.Object);
            var filter = new Mock<Filter>();
            filter.Object.Id = 1;
            //Act
            IList<TripWithUserDTO> tripWithUser = searchService.FilterTripsByCountry(filter.Object, out var total);

            //Assert
            Assert.NotNull(tripWithUser);
            Assert.Equal(total, tripWithUser.Count);
        }
    */
    }
    
}
