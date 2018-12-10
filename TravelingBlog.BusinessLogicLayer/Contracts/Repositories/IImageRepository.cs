using Microsoft.AspNetCore.Http;
using Microsoft.WindowsAzure.Storage.Blob;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.BusinessLogicLayer.Contracts.Repositories
{
    public interface IImageRepository : IRepository<Image>
    {
        IEnumerable<Image> GetImages();
        IEnumerable<Image> GetImagesWhithPostBlog(int postBlodId);
        Image GetById(int id);
        string DeleteBlob(CloudBlobContainer container, int userId);
        Task SetImageAsync(Uri uri);
        
    }
}
