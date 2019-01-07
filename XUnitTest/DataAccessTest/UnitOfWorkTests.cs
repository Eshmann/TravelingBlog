
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Moq;
using TravelingBlog.BusinessLogicLayer.ModelsServices;
using TravelingBlog.DataAcceesLayer.Data;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.DataAcceesLayer.Repositories;
using TravelingBlog.DataAcceesLayer.Repositories.Contracts;
using TravelingBlog.Models;
using TravelingBlog.Models.ViewModels.DTO;
using Xunit;

namespace XUnitTest.ServiceTest
{
    public class UnitOfWorkTests
    {
        private readonly UnitOfWork _unitOfWork;
        private readonly Mock<ApplicationDbContext> _mockedContext;

        public UnitOfWorkTests()
        {
            _mockedContext = new Mock<ApplicationDbContext>(new DbContextOptions<ApplicationDbContext>());
            _unitOfWork = new UnitOfWork(_mockedContext.Object);
        }

        [Fact]
        public void GetRepositoryTest()
        {
            // Act
            var tripRepo = _unitOfWork.GetRepository<Trip>();
            var copyRepository = _unitOfWork.GetRepository<Trip>();

            // Assert
            Assert.Same(tripRepo, copyRepository);
            Assert.IsType<Repository<Trip>>(tripRepo);
        }

        [Fact]
        public void SaveChangesTest()
        {
            //Act
            _unitOfWork.Complete();

            // Assert
            _mockedContext.Verify(rc => rc.SaveChanges(), Times.Once());
        }

        [Fact]
        public void DisposeTest()
        {
            //Act
            _unitOfWork.Dispose();

            // Assert
            _mockedContext.Verify(rc => rc.Dispose(), Times.Once());
        }
    }

}

