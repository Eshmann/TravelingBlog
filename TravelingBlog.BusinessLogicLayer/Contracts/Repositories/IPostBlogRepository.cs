using TravelingBlog.DataAcceesLayer.Models.Entities;
using System.Collections.Generic;
using TravelingBlog.BusinessLogicLayer.ViewModels.DTO;
using System.Threading.Tasks;

namespace TravelingBlog.BusinessLogicLayer.Contracts.Repositories
{
    public interface IPostBlogRepository: IRepository<PostBlog>
    {
        Task<IEnumerable<PostBlog>> GetAllPostBlogsAsync();
        Task<PostBlog> GetPostBlogByIdAsync(int postBlogId);
    }
}
