using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelingBlog.BusinessLogicLayer.Contracts.Repositories;
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

        public async Task<IEnumerable<Trip>> GetAllTripsAsync()
        {
            var trips = await FindAllAsync();
            return trips.OrderBy(t => t.Name);
        }

        public bool IsUserCreator(int userId, int tripId)
        {
            return Set.Any(i => i.UserInfoId == userId && i.Id == tripId);
        }
        public Trip GetTripWithPostBlogs(int id)
        {
            return ApplicationDbContext.Trips.Include(t => t.PostBlogs).SingleOrDefault(t => t.Id == id);
        }

        public async Task<IEnumerable<TripDetail>> GetUserTripsAsync(string id)
        {
            List<TripDetail> trips = new List<TripDetail>();
            var user = await ApplicationDbContext.UserInfoes.Include(c => c.Identity).SingleAsync(c => c.Identity.Id == id);
            var userTrips = ApplicationDbContext.Trips.Where(x => x.UserInfoId==user.Id);
            foreach(var trip in userTrips)
            {
                trips.Add(new TripDetail { Description = trip.Description, IsDone = trip.IsDone, Name = trip.Name, Id = trip.Id });
            }
            
            return trips;
        }
    }
}
