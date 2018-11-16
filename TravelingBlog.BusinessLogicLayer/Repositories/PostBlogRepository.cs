using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.BusinessLogicLayer.Contracts.Repositories;
using System.Collections.Generic;
using TravelingBlog.BusinessLogicLayer.Repositories;
using TravelingBlog.DataAcceesLayer.Data;

namespace TravelingBlog.BusinessLogicLayer.Repositories
{
    public class PostBlogRepository : Repository<PostBlog>, IPostBlogRepository
    {
        public PostBlogRepository(ApplicationDbContext ApplicationDbContext) : base(ApplicationDbContext)
        {
        }

        public PostBlog GetPostBlogById(int postBlogId)
        {
            return SingleOrDefault(c => c.Id.Equals(postBlogId));
        }

        public IEnumerable<PostBlog> GetAllPostBlogs()
        {
            return FindAll()
                .OrderBy(pb => pb.Name);
        }
    }
}
