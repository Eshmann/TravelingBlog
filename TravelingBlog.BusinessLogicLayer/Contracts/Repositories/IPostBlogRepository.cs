using TravelingBlog.DataAcceesLayer.Models.Entities;
using System.Collections.Generic;
using TravelingBlog.BusinessLogicLayer.ViewModels.DTO;

namespace TravelingBlog.BusinessLogicLayer.Contracts.Repositories
{
    public interface IPostBlogRepository: IRepository<PostBlog>
    {
        IEnumerable<PostBlog> GetAllPostBlogs();
        PostBlog GetPostBlogById(int postBlogId);
    }
}
