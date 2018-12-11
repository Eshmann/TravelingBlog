using System;
using System.Collections;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.BusinessLogicLayer.ViewModels.DTO;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelingBlog.BusinessLogicLayer.ResourceHelpers;
using TravelingBlog.BusinessLogicLayer.ResourseHelpers;
using TravelingBlog.BusinessLogicLayer.ViewModels.TripViewModels;

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
        IEnumerable<Trip> GetTripsWithHighestRating();
        IList<TripWithUserInfo> FilterTripsByCountry(Filter filter, out int total);
    }
}
