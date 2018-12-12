using System.Collections.Generic;
using System.Threading.Tasks;
using TravelingBlog.BusinessLogicLayer.ResourceHelpers;
using TravelingBlog.BusinessLogicLayer.ResourseHelpers;
using TravelingBlog.BusinessLogicLayer.ViewModels.TripViewModels;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.BusinessLogicLayer.Contracts.Repositories
{
    public interface ITripRepository : IRepository<Trip>
    {
        IList<Trip> GetAllTripsAsync(PagingModel pageModel, out int total);
        Task<Trip> GetTripByIdAsync(int tripId);
        bool IsUserCreator(int userId, int tripId);
        Trip GetTripWithPostBlogs(int id);
        IList<TripWithUserInfo> SearchTrips(Search searchQuery, out int total);
        Task<IEnumerable<TripDetail>> GetUserTripsAsync(string id);
        IEnumerable<Trip> GetTripsWithHighestRating(int count);
        IEnumerable<Trip> GetRandomTrips(int count, List<Trip> trips);
        IList<TripWithUserInfo> FilterTripsByCountry(Filter filter, out int total);
    }
}
