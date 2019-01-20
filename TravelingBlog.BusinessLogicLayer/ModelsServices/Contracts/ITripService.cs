using System.Collections.Generic;
using System.Security.Claims;
using TravelingBlog.Models;
using TravelingBlog.Models.Filters;
using TravelingBlog.Models.ViewModels.DTO;

namespace TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts
{
    public interface ITripService : IService<TripDTO, TripFilter>
    {
        TripWithPostBlogsDTO GetTripWithPostBlogs(TripFilter filter);

        IList<TripDTODa> GetTripsPage(PagingModel pageModel, out int total);


        IList<TripWithUserDTO> GetTripsWithHighestRating();

        IEnumerable<TripDTO> GetRandomTrips(int count, List<TripDTO> trips);

        IEnumerable<TripDTO> GetUserTrips(string id);
        IEnumerable<TripDTO> GetUserTrips(int id);

        bool IsUserCreator(ClaimsPrincipal user, int tripId);
    }
}
