using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.BusinessLogicLayer.ViewModels.DTO;
using System.Collections.Generic;

namespace TravelingBlog.BusinessLogicLayer.Contracts.Repositories
{
    public interface ITripRepository : IRepository<Trip>
    {
        IEnumerable<Trip> GetAllTrips();
        Trip GetTripById(int tripId);
    }
}
