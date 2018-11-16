using System;
using System.Collections.Generic;
using System.Linq;
using TravelingBlog.BusinessLogicLayer.Contracts.Repositories;
using Microsoft.EntityFrameworkCore;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.DataAcceesLayer.Data;

namespace TravelingBlog.BusinessLogicLayer.Repositories
{
    public class TripRepository : Repository<Trip>, ITripRepository
    {
        public TripRepository(ApplicationDbContext ApplicationDbContext) : base(ApplicationDbContext)
        {
        }

        public Trip GetTripById(int tripId)
        {
            return SingleOrDefault(t => t.Id.Equals(tripId));
        }

        public IEnumerable<Trip> GetAllTrips()
        {
            return FindAll()
                .OrderBy(t => t.Name);
        }
    }
}
