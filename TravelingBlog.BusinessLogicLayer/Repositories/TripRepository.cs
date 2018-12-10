using System.Collections.Generic;
using System.Linq;
using TravelingBlog.BusinessLogicLayer.Contracts.Repositories;
using Microsoft.EntityFrameworkCore;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.DataAcceesLayer.Data;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.Internal;
using TravelingBlog.BusinessLogicLayer.ResourceHelpers;
using TravelingBlog.BusinessLogicLayer.ResourseHelpers;
using TravelingBlog.BusinessLogicLayer.ViewModels.TripViewModels;

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

        public bool IsUserCreator(int userId, int tripId)
        {
            return Set.Any(i => i.UserInfoId == userId && i.Id == tripId);
        }
        public Trip GetTripWithPostBlogs(int id)
        {
            return ApplicationDbContext.Trips.Include(t => t.PostBlogs).SingleOrDefault(t => t.Id == id);
        }

        public IList<Trip> SearchTrips(Search searchQuery, out int total)
        {
            var word = searchQuery.SearchQuery;
            var result = ApplicationDbContext
                .Trips.Where(x => x.Name.ToLower().Contains(word)
                                  || x.Description.ToLower().Contains(word));
            total = result.Count();
            var skip = result.Skip(searchQuery.PageSize * (searchQuery.PageNumber - 1))
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

        public IList<Trip> FilterTripsByCountry(Filter filter, out int total)
        {
            var query = ApplicationDbContext.Trips.Where(i => i.CountryTrips
                .Any(x => x.Country.Id == filter.Id));
            total = query.Count();
            var result = query.Skip(filter.PageSize * (filter.PageNumber - 1))
               .Take(filter.PageSize)
                .ToList();
            return result.ToList();
        }
    }
}
