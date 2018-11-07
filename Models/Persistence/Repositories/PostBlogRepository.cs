using System;
using System.Linq;
using AdventureDb.Core.Repositories;
using Microsoft.EntityFrameworkCore;
using AdventureDb.Models;

namespace AdventureDb.Persistence.Repositories
{
    public class PostBlogRepository : Repository<PostBlog>, IPostBlogRepository
    {
        public PostBlogRepository(DbContext context) : base(context)
        {
        }

        public PostBlog GetPostBlogWithCountries(int id)
        {
            try
            {
                return AdventureBlogContext.PostBlogs.Include(p => p.CountryPostBlogs).SingleOrDefault(t => t.Id == id);
            }
            catch(ArgumentNullException)
            {
                return null;
            }
            catch(InvalidOperationException)
            {
                return null;
            }
        }

        public PostBlog GetPostBlogWithImages(int id)
        {
            try
            {
                return AdventureBlogContext.PostBlogs.Include(p => p.Images).SingleOrDefault(t => t.Id == id);
            }
            catch (ArgumentNullException)
            {
                return null;
            }
            catch (InvalidOperationException)
            {
                return null;
            }
        }

        public PostBlog GetPostBlogWithPurchases(int id)
        {
            try
            {
                return AdventureBlogContext.PostBlogs.Include(p => p.Purchases).SingleOrDefault(t => t.Id == id);
            }
            catch (ArgumentNullException)
            {
                return null;
            }
            catch (InvalidOperationException)
            {
                return null;
            }
        }        

        public PostBlog GetPostBlogWithTags(int id)
        {
            try
            {
                return AdventureBlogContext.PostBlogs.Include(p => p.TagPostBlogs).SingleOrDefault(t => t.Id == id);
            }
            catch (ArgumentNullException)
            {
                return null;
            }
            catch (InvalidOperationException)
            {
                return null;
            }
        }
        public AdventureBlogContext AdventureBlogContext
        {
            get { return Context as AdventureBlogContext; }
        }
    }
}
