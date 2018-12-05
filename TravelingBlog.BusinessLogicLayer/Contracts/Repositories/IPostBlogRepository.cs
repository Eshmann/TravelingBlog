using System.Collections.Generic;
using System.Threading.Tasks;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.BusinessLogicLayer.Contracts.Repositories
{
    public interface IPostBlogRepository: IRepository<PostBlog>
    {
        Task<IEnumerable<PostBlog>> GetAllPostBlogsAsync();
        Task<PostBlog> GetPostBlogByIdAsync(int postBlogId);
    }
}
