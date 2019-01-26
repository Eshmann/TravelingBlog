//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Linq.Expressions;
//using System.Text;
//using AutoMapper;
//using Microsoft.Extensions.Logging;
//using Moq;
//using TravelingBlog.BusinessLogicLayer.ModelsServices;
//using TravelingBlog.BusinessLogicLayer.SecondaryServices.LoggerService;
//using TravelingBlog.DataAcceesLayer.Models.Entities;
//using TravelingBlog.DataAcceesLayer.Repositories.Contracts;
//using TravelingBlog.Models;
//using TravelingBlog.Models.Filters;
//using TravelingBlog.Models.ViewModels.DTO;
//using Xunit;

//namespace XUnitTest.ServiceTests
//{
//    public class TripServiceTest
//    {
//        private readonly List<Trip> _trips;

//        private Trip soloTrip;

//        public TripServiceTest()
//        {
//            soloTrip = new Trip
//            {
//                Id = 10,
//                Name = "Trip 1 testing",
//                IsDone = false,
//                UserInfoId = 1,
//                Description = "Trip description 1",
//                RatingTrip = 3.0,
//                PostBlogs = new List<PostBlog>()
//                {
//                    new PostBlog
//                    {
//                        Name = "Pb 1",
//                        Id = 10,
//                        Plot = "Plot 1",
//                        TripId = 10
//                    }
//                },
//                UserInfo = new UserInfo
//                {
//                    Id = 2
//                }
//            };
//            _trips = new List<Trip>
//            {
//                new Trip
//                {
//                    Id = 1, Name = "Trip 1 testing", IsDone = false, UserInfoId = 1, Description = "Trip description 1", RatingTrip = 3.0,
//                    PostBlogs = new List<PostBlog>()
//                    {
//                        new PostBlog
//                        {
//                            Name = "Pb 1",
//                            Id = 1,
//                            Plot = "Plot 1",
//                            TripId = 1
//                        }
//                    },
//                    UserInfo = new UserInfo
//                    {
//                        Id = 1
//                    }
//                },
//                new Trip {Id = 2, Name = "Trip 2 testing", IsDone = false, UserInfoId = 1, Description = "Trip description 2", RatingTrip = 3.0,
//                    PostBlogs = new List<PostBlog>()
//                        {
//                        new PostBlog
//                        {
//                            Name = "Pb 2",
//                            Id = 2,
//                            Plot = "Plot 2",
//                            TripId = 2
//                        }
//                    },
//                    UserInfo = new UserInfo
//                    {
//                        Id = 1
//                    }
//                },
//                new Trip {Id = 3, Name = "Trip 2 testing", IsDone = false, UserInfoId = 1, Description = "Trip description 3" , RatingTrip = 3.0,
//                    PostBlogs = new List<PostBlog>()
//                    {
//                        new PostBlog
//                        {
//                            Name = "Pb 3",
//                            Id = 3,
//                            Plot = "Plot 3",
//                            TripId = 3
//                        }
//                    }
//                    ,
//                    UserInfo = new UserInfo
//                    {
//                        Id = 1
//                    }
//                }
//            };

//        }


//        [Fact]
//        public void GetTripTest()
//        {
//            //Arrange
//            Mock<IUnitOfWork> mockUnitOfWork = new Mock<IUnitOfWork>();
//            Mock<IRepository<Trip>> tripRepository = new Mock<IRepository<Trip>>();
//            tripRepository.Setup(x => x.GetAll()).Returns(_trips.AsQueryable());
//            mockUnitOfWork.Setup(m => m.GetRepository<Trip>()).Returns(tripRepository.Object);
//            Mock<ILoggerManager> loggerMock = new Mock<ILoggerManager>();
//            Mock<IMapper> mapper = new Mock<IMapper>();
//            TripService tripService = new TripService(mockUnitOfWork.Object, loggerMock.Object, mapper.Object);

//            //Act
//            IEnumerable<TripDTO> tripDto = tripService.GetAll();

//            //Assert
//            Assert.NotEmpty(tripDto);
//            Assert.NotNull(tripDto);
//            Assert.Equal(3, tripDto.Count());
//        }
//        [Fact]
//        public void GetTripsPage()
//        {
//            //Arrange
//            Mock<IUnitOfWork> mockUnitOfWork = new Mock<IUnitOfWork>();
//            Mock<IRepository<Trip>> tripRepository = new Mock<IRepository<Trip>>();
//            tripRepository.Setup(x => x.GetAll()).Returns(_trips.AsQueryable());
//            mockUnitOfWork.Setup(m => m.GetRepository<Trip>()).Returns(tripRepository.Object);
//            Mock<ILoggerManager> loggerMock = new Mock<ILoggerManager>();
//            Mock<IMapper> mapper = new Mock<IMapper>();
//            TripService tripService = new TripService(mockUnitOfWork.Object, loggerMock.Object, mapper.Object);
//            var filter = new Mock<PagingModel>();
//            filter.Object.PageNumber = 1;
//            filter.Object.PageSize = 3;
//            //Act
//            IList<TripDTODa> tripDtoa = tripService.GetTripsPage(filter.Object, out var total);

//            //Assert
//            Assert.NotEmpty(tripDtoa);
//            Assert.NotNull(tripDtoa);
//            Assert.Equal(3, tripDtoa.Count());
//        }


//        [Fact]
//        public void GetTripsWithBlogs()
//        {
//            Mock<IUnitOfWork> mockUnitOfWork = new Mock<IUnitOfWork>();
//            Mock<IRepository<Trip>> tripRepository = new Mock<IRepository<Trip>>();
//            tripRepository.Setup(x => x.Get(It.IsAny<Expression<Func<Trip, bool>>>())).Returns(_trips.AsQueryable());
//            mockUnitOfWork.Setup(m => m.GetRepository<Trip>()).Returns(tripRepository.Object);
//            Mock<ILoggerManager> loggerMock = new Mock<ILoggerManager>();
//            Mock<IMapper> mapper = new Mock<IMapper>();
//            TripService tripService = new TripService(mockUnitOfWork.Object, loggerMock.Object, mapper.Object);
//            var filter = new Mock<TripFilter>();
//            filter.Object.Id = 1;
//            //Act
//            TripWithPostBlogsDTO tripDto = tripService.GetTripWithPostBlogs(filter.Object);

//            //Assert
//            Assert.Null(tripDto);

//        }

//        [Fact]
//        public void AddTrip()
//        {
//            //Arrange
//            TripDTO trip = new TripDTO
//            {
//                Id = 1,
//                Name = "Test trip add",
//                Description = "Add description",
//                IsDone = false,
//                RatingTrip = 3.0
//            };

//            bool isAdded = false;
//            Mock<IUnitOfWork> unitOfWorkMock = new Mock<IUnitOfWork>();
//            Mock<IRepository<Trip>> repositoryMock = new Mock<IRepository<Trip>>();
//            repositoryMock.Setup(repo => repo.Get(It.IsAny<Expression<Func<Trip, bool>>>()))
//                .Returns<Expression<Func<Trip, bool>>>(predicate =>
//                    _trips.Where(predicate.Compile()).AsQueryable());
//            repositoryMock.Setup(repo => repo.Add(It.IsAny<Trip>())).Callback(() => isAdded = true);
//            unitOfWorkMock.Setup(getRepo => getRepo.GetRepository<Trip>()).Returns(repositoryMock.Object);
//            Mock<ILoggerManager> loggerMock = new Mock<ILoggerManager>();
//            Mock<IMapper> mapper = new Mock<IMapper>();
//            TripService tripService = new TripService(unitOfWorkMock.Object, loggerMock.Object, mapper.Object);
//            //Act
//            tripService.Add(trip);

//            //Assert
//            Assert.True(isAdded);
//        }

//        [Fact]
//        public void RemoveTrip()
//        {

//            //Arrange
//            TripDTO tripDto = new TripDTO
//            {
//                Id = 1,
//                Name = "",
//                RatingTrip = 3,
//                Description = "",
//                IsDone = false,
//                UserInfoId = 1
//            };
//            bool isRemoved = false;
//            Mock<IUnitOfWork> unitOfWorkMock = new Mock<IUnitOfWork>();
//            Mock<IRepository<Trip>> repositoryMock = new Mock<IRepository<Trip>>();
//            repositoryMock.Setup(repo => repo.Get(It.IsAny<Expression<Func<Trip, bool>>>()))
//                .Returns<Expression<Func<Trip, bool>>>(predicate =>
//                    _trips.Where(predicate.Compile()).AsQueryable());
//            repositoryMock.Setup(repo => repo.Remove(It.IsAny<Trip>())).Callback(() => isRemoved = true);
//            unitOfWorkMock.Setup(getRepo => getRepo.GetRepository<Trip>()).Returns(repositoryMock.Object);
//            Mock<ILoggerManager> loggerMock = new Mock<ILoggerManager>();
//            Mock<IMapper> mapper = new Mock<IMapper>();
//            TripService studentService = new TripService(unitOfWorkMock.Object, loggerMock.Object, mapper.Object);

//            //Act
//            studentService.Remove(tripDto);

//            //Assert
//            Assert.True(isRemoved);
//        }

//        [Fact]
//        public void UpdateTrip()
//        {
//            //Arrange
//            TripDTO tripDto = new TripDTO
//            {
//                Id = 1,
//                Name = "",
//                RatingTrip = 3,
//                Description = "",
//                IsDone = false,
//                UserInfoId = 1
//            };
//            bool isUpdated = false;
//            Mock<IUnitOfWork> unitOfWorkMock = new Mock<IUnitOfWork>();
//            Mock<IRepository<Trip>> repositoryMock = new Mock<IRepository<Trip>>();
//            repositoryMock.Setup(repo => repo.Get(It.IsAny<Expression<Func<Trip, bool>>>()))
//                .Returns<Expression<Func<Trip, bool>>>(predicate =>
//                    _trips.Where(predicate.Compile()).AsQueryable());
//            repositoryMock.Setup(repo => repo.Update(It.IsAny<Trip>())).Callback(() => isUpdated = true);
//            unitOfWorkMock.Setup(getRepo => getRepo.GetRepository<Trip>()).Returns(repositoryMock.Object);
//            Mock<ILoggerManager> loggerMock = new Mock<ILoggerManager>();
//            Mock<IMapper> mapper = new Mock<IMapper>();
//            TripService studentService = new TripService(unitOfWorkMock.Object, loggerMock.Object, mapper.Object);
//            //Act

//            studentService.Update(tripDto);
//            //Assert
//            Assert.True(isUpdated);

//        }



//    }
//}
