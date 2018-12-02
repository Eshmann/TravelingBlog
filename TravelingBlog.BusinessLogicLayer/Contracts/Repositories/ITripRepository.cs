﻿using System.Collections.Generic;
using System.Threading.Tasks;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.BusinessLogicLayer.Contracts.Repositories
{
    public interface ITripRepository : IRepository<Trip>
    {
        Task<IEnumerable<Trip>> GetAllTripsAsync();
        Task<Trip> GetTripByIdAsync(int tripId);
        bool IsUserCreator(int userId, int tripId);
        Trip GetTripWithPostBlogs(int id);
    }
}
