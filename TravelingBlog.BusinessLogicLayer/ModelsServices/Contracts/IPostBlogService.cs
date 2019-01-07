using System.Linq;
using TravelingBlog.Models;
using TravelingBlog.Models.Filters;
using TravelingBlog.Models.ViewModels.DTO;

namespace TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts
{
    public interface IPostBlogService : IService<PostBlogDTO, PostBlogFilter>
    {

    }
}
