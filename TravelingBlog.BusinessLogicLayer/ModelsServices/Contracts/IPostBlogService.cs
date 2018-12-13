using System.Linq;
using TravelingBlog.Models;
using TravelingBlog.Models.Filters;
using TravelingBlog.Models.ViewModels.DTO;

namespace TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts
{
    public interface IPostBlogService : IService<PostBlogDTO, PostBlogFilter>
    {
        IQueryable<PostBlogDTO> GetPostBlogsPage(PagingModel pageModel, out int total);

        IQueryable<PostBlogDTO> SearchBlog(Search searchQuery);

    }
}
