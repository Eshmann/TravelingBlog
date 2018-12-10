using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelingBlog.BusinessLogicLayer.Contracts.Repositories;
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
        public IEnumerable<Image> GetImages()
        {
            return _ctx.Images.Include(img => img.PostBlog);
        }
        public Image GetById(int id)
        {
            return GetImages()
                .Where(img => img.Id == id)
                .First();
        }
        public IEnumerable<Image> GetImagesWhithPostBlog(int postid)
        {
            return GetImages();
                 //.Where(img => img.PostBlogId());
   
        }
      
        public async Task SetImageAsync(Uri uri)
        {
            var image = new Image
            {
                Path = uri.ToString(),
            };
            _ctx.Add(image);
            await _ctx.SaveChangesAsync();
        }

        public string DeleteBlob(CloudBlobContainer container, int userId)
        {
            container.DeleteAsync().Wait();
            return "Container deleted";
        }
    }
}
