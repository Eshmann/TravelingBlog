using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelingBlog.BusinessLogicLayer.Contracts.Repositories;
using TravelingBlog.BusinessLogicLayer.ViewModels.DTO;
using TravelingBlog.DataAcceesLayer.Data;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.BusinessLogicLayer.Repositories
{
    class ImageRepository : Repository<Image> , IImageRepository
    {
        private readonly ApplicationDbContext _ctx;
        
        public  ImageRepository(ApplicationDbContext applicationDbContext) : base(applicationDbContext)
        {
            _ctx = applicationDbContext; 
        }
    }
}
