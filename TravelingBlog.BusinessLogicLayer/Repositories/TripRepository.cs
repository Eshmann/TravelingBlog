using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelingBlog.BusinessLogicLayer.Contracts.Repositories;
using TravelingBlog.BusinessLogicLayer.ResourceHelpers;
using TravelingBlog.BusinessLogicLayer.ResourseHelpers;
using TravelingBlog.BusinessLogicLayer.ViewModels.TripViewModels;
using TravelingBlog.DataAcceesLayer.Data;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.BusinessLogicLayer.Repositories
{
    public class TripRepository : Repository<Trip>, ITripRepository
    {
        public TripRepository(ApplicationDbContext ApplicationDbContext) : base(ApplicationDbContext)
        {
        }

        public async Task<Trip> GetTripByIdAsync(int tripId)
        {
            return await SingleOrDefaultAsync(t => t.Id.Equals(tripId));
        }

        public IList<Trip> GetAllTripsAsync(PagingModel pageModel, out int total)
        {
            var tripq = ApplicationDbContext.Trips.OrderBy(t => t.Name)
                .ThenBy(x => x.Description).ToList();
            total = tripq.Count();
            var data = tripq.Skip(pageModel.PageSize * (pageModel.PageNumber - 1))
                .Take(pageModel.PageSize);
            return data.ToList();

        }

        public IEnumerable<Trip> GetTripsWithHighestRating(int count)
        {
            if (count < ApplicationDbContext.Trips.Count())
                count = ApplicationDbContext.Trips.Count();

            return ApplicationDbContext.Trips
                .OrderByDescending(t => t.RatingTrip)
                .Take(count)
                .ToList();
        }

        public IEnumerable<Trip> GetRandomTrips(int count, List<Trip> trips)
        {
            var rnd = new Random();
            var shuffle = new List<Trip>(trips);

            for (var i = 2; i < shuffle.Count; ++i)
            {
                var temp = shuffle[i];
                var nextRandom = rnd.Next(i - 1);
                shuffle[i] = shuffle[nextRandom];
                shuffle[nextRandom] = temp;
            }

            var result = shuffle.GetRange(0, count);

            return result;
        }

        public bool IsUserCreator(int userId, int tripId)
        {
            return Set.Any(i => i.UserInfoId == userId && i.Id == tripId);
        }
        public Trip GetTripWithPostBlogs(int id)
        {
            return ApplicationDbContext.Trips.Include(t => t.PostBlogs).SingleOrDefault(t => t.Id == id);
        }

        public IList<TripWithUserInfo> SearchTrips(Search searchQuery, out int total)
        {
            List<TripWithUserInfo> user = new List<TripWithUserInfo>();
            var word = searchQuery.SearchQuery;
            var result = ApplicationDbContext
                .Trips.Where(x => x.Name.ToLower().Contains(word)
                                  || x.Description.ToLower().Contains(word)).Include(i => i.UserInfo);
            total = result.Count();
            foreach (var n in result)
            {
                user.Add(new TripWithUserInfo
                {
                    Name = n.Name,
                    Description = n.Description,
                    Id = n.Id,
                    FirstName = n.UserInfo.FirstName,
                    LastName = n.UserInfo.LastName
                });
            }
            var skip = user.Skip(searchQuery.PageSize * (searchQuery.PageNumber - 1))
             .Take(searchQuery.PageSize);

            return skip.ToList();
        }
        public async Task<IEnumerable<TripDetail>> GetUserTripsAsync(string id)
        {
            List<TripDetail> trips = new List<TripDetail>();
            var user = await ApplicationDbContext.UserInfoes.Include(c => c.Identity).SingleAsync(c => c.Identity.Id == id);
            var userTrips = ApplicationDbContext.Trips.Where(x => x.UserInfoId == user.Id);
            foreach (var trip in userTrips)
            {
                trips.Add(new TripDetail { Description = trip.Description, IsDone = trip.IsDone, Name = trip.Name, Id = trip.Id });
            }

            return trips;
        }

        public IList<TripWithUserInfo> FilterTripsByCountry(Filter filter, out int total)
        {
            List<TripWithUserInfo> user = new List<TripWithUserInfo>();
            var query = ApplicationDbContext.Trips.Where(i => i.CountryTrips
                .Any(x => x.Country.Id == filter.Id)).Include(a => a.UserInfo);
            total = query.Count();
            foreach (var n in query)
            {
                user.Add(new TripWithUserInfo
                {
                    Name = n.Name,
                    Description = n.Description,
                    Id = n.Id,
                    FirstName = n.UserInfo.FirstName,
                    LastName = n.UserInfo.LastName
                });
            }
            var result = user
                .Skip(filter.PageSize * (filter.PageNumber - 1))
                .Take(filter.PageSize).ToList();
            return result.ToList();
        }
    }
}
