using System;
using System.Linq;
using AdventureDb.Core.Repositories;
using Microsoft.EntityFrameworkCore;
using AdventureDb.Models;

namespace AdventureDb.Persistence.Repositories
{
    public class TagRepository : Repository<Tag>, ITagRepository
    {
        public TagRepository(DbContext context) : base(context)
        {
        }

        public Tag GetTagWithPostBlogs(int id)
        {
            try
            {
                return AdventureBlogContext.Tags.Include(t => t.TagPostBlogs).SingleOrDefault(t => t.Id == id);
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

        public Tag GetTagWithTrips(int id)
        {
            try
            {
                return AdventureBlogContext.Tags.Include(t => t.TagTrips).SingleOrDefault(t => t.Id == id);
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
