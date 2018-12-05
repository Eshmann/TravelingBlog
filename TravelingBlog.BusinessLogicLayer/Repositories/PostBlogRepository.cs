using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelingBlog.BusinessLogicLayer.Contracts.Repositories;
using TravelingBlog.DataAcceesLayer.Data;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.BusinessLogicLayer.Repositories
{
    public class PostBlogRepository : Repository<PostBlog>, IPostBlogRepository
    {
        public PostBlogRepository(ApplicationDbContext ApplicationDbContext) : base(ApplicationDbContext)
        {
        }

        public async Task<PostBlog> GetPostBlogByIdAsync(int postBlogId)
        {
            return await SingleOrDefaultAsync(c => c.Id.Equals(postBlogId));
        }

        public async Task<IEnumerable<PostBlog>> GetAllPostBlogsAsync()
        {
            var postBlogs = await FindAllAsync();
            return postBlogs.OrderBy(pb => pb.Name);
        }
    }
}
