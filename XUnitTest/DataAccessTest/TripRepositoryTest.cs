using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using TravelingBlog.DataAcceesLayer.Data;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.DataAcceesLayer.Repositories;
using TravelingBlog.DataAcceesLayer.Repositories.Contracts;
using Xunit;

namespace XUnitTest.DataAccessTest
{
    public class TripRepositoryTest
    {
        private readonly List<Trip> _trips;
        private const int _oneElement = 1;
        private ApplicationDbContext _dbContext;
        private IUnitOfWork _unitOfWork;

        public TripRepositoryTest()
        {
            _trips = new List<Trip>
            {
                new Trip {Id = 1, Name = "Trip 1 testing", IsDone = false, UserInfoId = 1, Description = "Trip description 1" },
                new Trip {Id = 2, Name = "Trip 2 testing", IsDone = false, UserInfoId = 1, Description = "Trip description 2" },
                new Trip {Id = 3, Name = "Trip 2 testing", IsDone = false, UserInfoId = 1, Description = "Trip description 3" }
            };

            _dbContext = GetContext();
            _unitOfWork = new UnitOfWork(_dbContext);
        }
        [Fact]
        public void AddTest()
        {
            // Act
            _unitOfWork.GetRepository<Trip>().Add(_trips[0]);
            _unitOfWork.Complete();

            // Assert
            Assert.Equal(_oneElement, _dbContext.Trips.Count());
            Assert.Equal(_trips[0].Name, _dbContext.Trips.Single().Name);
            Assert.Equal(_trips[0].Id, _dbContext.Trips.Single().Id);
            Assert.IsType<Trip>(_dbContext.Trips.Single());
        }

        [Fact]
        public void AddRangeTest()
        {
            // Act
            _unitOfWork.GetRepository<Trip>().AddRange(_trips);
            _unitOfWork.Complete();

            // Assert
            Assert.Equal(_trips.Count, _dbContext.Trips.Count());
            foreach (var academy in _trips)
            {
                Assert.Contains(academy, _dbContext.Trips);
            }
        }

        [Fact]
        public void RemoveTest()
        {
            // Act
            _unitOfWork.GetRepository<Trip>().Add(_trips[0]);
            _unitOfWork.Complete();

            Assert.Equal(_oneElement, _dbContext.Trips.Count());

            _unitOfWork.GetRepository<Trip>().Remove(_dbContext.Trips.Single());
            _unitOfWork.Complete();

            // Assert
            Assert.Empty(_dbContext.Trips);
        }

        [Fact]
        public void RemoveRangeTest()
        {
            // Act
            _unitOfWork.GetRepository<Trip>().AddRange(_trips);
            _unitOfWork.Complete();

            Assert.Equal(_trips.Count, _dbContext.Trips.Count());

            _unitOfWork.GetRepository<Trip>().RemoveRange(_trips);
            _unitOfWork.Complete();

            // Assert
            Assert.Empty(_dbContext.Trips);
        }

        [Fact]
        public void GetTest()
        {
            // Arange
            _unitOfWork.GetRepository<Trip>().AddRange(_trips);
            _unitOfWork.Complete();

            Expression<Func<Trip, bool>> predicate = a => a.Id == 1;

            // Act
            var result = _unitOfWork.GetRepository<Trip>().GetAll();

            //Assert
            Assert.Equal(_trips.Count, result.Count());
            foreach (var trip in _trips)
            {
                Assert.Contains(trip, result);
            }
        }

        [Fact]
        public void GetPredicateTest()
        {
            // Arrange
            _unitOfWork.GetRepository<Trip>().AddRange(_trips);
            _unitOfWork.Complete();
            Expression<Func<Trip, bool>> predicate = a => a.Id > 0;
            List<Trip> filteredList = _trips.Where(predicate.Compile()).ToList();

            // Act
            var result = _unitOfWork.GetRepository<Trip>().GetAll();

            //Assert
            Assert.Equal(filteredList.Count, result.Count());
            foreach (var trip in filteredList)
            {
                Assert.Contains(trip, result);
            }
        }

        private ApplicationDbContext GetContext()
        {
            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(Guid.NewGuid().ToString())
                .Options;

            var dataContext = new ApplicationDbContext(options);
            dataContext.Database.EnsureCreated();
            return dataContext;
        }
    }
}

