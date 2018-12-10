using System.Linq;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.BusinessLogicLayer.Contracts.Repositories;
using System.Collections.Generic;
using TravelingBlog.DataAcceesLayer.Data;
using System.Threading.Tasks;
using TravelingBlog.BusinessLogicLayer.ResourseHelpers;

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

        public IList<PostBlog> GetAllPostBlogsAsync(PagingModel pageModel, out int total)
        {
            var blogList = ApplicationDbContext.PostBlogs.OrderBy(t => t.Name)
                .ThenBy(x => x.Plot).ToList();
            total = blogList.Count();
            var blogs = blogList.Skip(pageModel.PageSize * (pageModel.PageNumber - 1))
                .Take(pageModel.PageSize);
            return blogs.ToList();
           
        }

        public IQueryable<PostBlog> SearchBlog(Search searchQuery)
        {
            var result = ApplicationDbContext.PostBlogs.Where(x =>
                x.Name.ToLower().Contains(searchQuery.SearchQuery) || x.Plot.ToLower().Contains(searchQuery.SearchQuery))
                .Skip(searchQuery.PageSize * (searchQuery.PageNumber - 1))
                .Take(searchQuery.PageSize);

            return result;
        }

    }
}
