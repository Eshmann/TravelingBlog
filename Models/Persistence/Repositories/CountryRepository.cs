using System;
using System.Linq;
using AdventureDb.Core.Repositories;
using Microsoft.EntityFrameworkCore;
using AdventureDb.Models;

namespace AdventureDb.Persistence.Repositories
{
    public class CountryRepository : Repository<Country>, ICountryRepository
    {
        public CountryRepository(DbContext context) : base(context)
        {
        }

        public Country GetCountryWithPostBlogs(int id)
        {
            try
            {
                return AdventureBlogContext.Countries.Include(c => c.CountryPostBlogs).SingleOrDefault(c => c.Id == id);
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

        public Country GetCountryWithTrips(int id)
        {
            try
            {
                return AdventureBlogContext.Countries.Include(c => c.CountryTrips).SingleOrDefault(c => c.Id == id);
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

        public Country GetCountryWithUsers(int id)
        {
            try
            {
                return AdventureBlogContext.Countries.Include(c => c.Users).SingleOrDefault(c => c.Id == id);
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
