using System;
using System.Collections.Generic;
using System.Text;
using TravelingBlog.Models;
using TravelingBlog.Models.Filters;
using TravelingBlog.Models.ViewModels.DTO;

namespace TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts
{
    public interface ISearchService : IService<TripWithUserDTO, TripFilter>
    {
        IList<TripWithUserDTO> FilterTripsByCountry(Filter filter, out int total);

        IList<TripWithUserDTO> SearchTrips(Search searchQuery, out int total);
    }
}
