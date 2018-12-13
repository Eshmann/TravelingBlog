using Microsoft.AspNetCore.Mvc;
using TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts;
using TravelingBlog.Models.Filters;
using TravelingBlog.Models.ViewModels.DTO;

namespace TravelingBlog.Controllers
{
    [Route("api/[controller]")]
    public class PostBlogController : BaseController<PostBlogDTO, PostBlogFilter>
    {
        public PostBlogController(IPostBlogService service)
            : base(service)
        {

        }
    }
}
