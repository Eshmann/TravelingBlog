using AutoMapper;
using System;
using System.Linq;
using System.Linq.Expressions;
using TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts;
using TravelingBlog.BusinessLogicLayer.SecondaryServices.LoggerService;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.DataAcceesLayer.Repositories.Contracts;
using TravelingBlog.Models;
using TravelingBlog.Models.Filters;
using TravelingBlog.Models.ViewModels.DTO;

namespace TravelingBlog.BusinessLogicLayer.ModelsServices
{
    public class PostBlogService : Service<PostBlog, PostBlogDTO, PostBlogFilter>, IPostBlogService
    {
        public PostBlogService(IUnitOfWork unitOfWork, ILoggerManager logger, IMapper mapper)
            : base(unitOfWork, logger, mapper) { }

        public IQueryable<PostBlogDTO> GetPostBlogsPage(PagingModel pageModel, out int total)
        {
            var blogList = Repository.GetAll()
                .OrderBy(pb => pb.Name)
                .ThenBy(pb => pb.Plot);

            total = blogList.Count();

            var blogs = blogList.Skip(pageModel.PageSize * (pageModel.PageNumber - 1))
                .Take(pageModel.PageSize);

            return blogs.Select(b => mapper.Map<PostBlogDTO>(b));

        }

        public IQueryable<PostBlogDTO> SearchBlog(Search searchQuery)
        {
            var result = Repository.GetAll()
                .Where(x => x.Name.ToLower().Contains(searchQuery.SearchQuery) || x.Plot.ToLower().Contains(searchQuery.SearchQuery))
                .Skip(searchQuery.PageSize * (searchQuery.PageNumber - 1))
                .Take(searchQuery.PageSize);

            return result.Select(b => mapper.Map<PostBlogDTO>(b));
        }

        protected override Expression<Func<PostBlog, bool>> GetFilter(PostBlogFilter filter)
        {
            Expression<Func<PostBlog, bool>> result = t => true;

            if (filter.Name != null)
            {
                result = CombineExpressions(result, t => t.Name == filter.Name);
            }

            return result;
        }
    }
}
