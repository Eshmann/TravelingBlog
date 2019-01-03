using System.Collections.Generic;
using TravelingBlog.Models;
using TravelingBlog.Models.Filters;
using TravelingBlog.Models.ViewModels.DTO;

namespace TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts
{
    public interface ITripService : IService<TripDTO, TripFilter>
    {
        TripWithPostBlogsDTO GetTripWithPostBlogs(TripFilter filter);

        IList<TripDTO> GetTripsPage(PagingModel pageModel, out int total);

        IEnumerable<TripDTO> GetTripsWithHighestRating(int count);

        IEnumerable<TripDTO> GetRandomTrips(int count, List<TripDTO> trips);

        IEnumerable<TripDTO> GetUserTrips(string id);
    }
}
