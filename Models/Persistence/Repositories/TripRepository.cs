using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using AdventureDb.Core.Repositories;
using Microsoft.EntityFrameworkCore;
using AdventureDb.Models;

namespace AdventureDb.Persistence.Repositories
{
    public class TripRepository : Repository<Trip>, ITripRepository
    {
        public TripRepository(DbContext context) : base(context)
        {
        }

        public IEnumerable<Trip> GetTopTrips(int count)
        {
            try
            {
                var tmp = from a in AdventureBlogContext.Ratings
                          group a by a.TripId into g
                          select new { TripId = g.Key, Count = g.Count() };
                var tmp2 = (from a in AdventureBlogContext.Trips
                            join b in tmp on a.Id equals b.TripId
                            orderby b.Count descending
                            select a).Take(count).ToList();


                return tmp2;
            }
            catch(ArgumentNullException)
            {
                return null;
            }
        }

        public IEnumerable<Trip> GetTripsWithUser(int pageIndex, int pageSize)
        {
            try
            {
                return AdventureBlogContext.Trips.Include(t => t.User).ToList();
            }
            catch(ArgumentNullException)
            {
                return null;
            }
        }

        public Trip GetTripWithComments(int id)
        {
            try
            {
                return AdventureBlogContext.Trips.Include(t => t.Comments).SingleOrDefault(t => t.Id == id);
            }
            catch (ArgumentNullException)
            {
                return null;
            }
            catch(InvalidOperationException)
            {
                return null;
            }
        }

        public Trip GetTripWithCountries(int id)
        {
            try
            {
                return AdventureBlogContext.Trips.Include(t => t.CountryTrips).SingleOrDefault(t => t.Id == id);
            }
            catch (ArgumentNullException)
            {
                return null;
            }
            catch(InvalidOperationException)
            {
                return null;
            }
        }

        public Trip GetTripWithPostBlogs(int id)
        {
            try
            {
                return AdventureBlogContext.Trips.Include(t => t.PostBlogs).SingleOrDefault(t => t.Id == id);
            }
            catch (ArgumentNullException)
            {
                return null;
            }
            catch(InvalidOperationException)
            {
                return null;
            }
        }

        public Trip GetTripWithTags(int id)
        {
            try
            {
                return AdventureBlogContext.Trips.Include(t => t.TagTrips).SingleOrDefault(t => t.Id == id);
            }
            catch (ArgumentNullException)
            {
                return null;
            }
            catch(InvalidOperationException)
            {
                return null;
            }
        }

        public Trip GetTripWithViews(int id)
        {
            try
            {
                return AdventureBlogContext.Trips.Include(t => t.Ratings).SingleOrDefault(t => t.Id == id);
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
