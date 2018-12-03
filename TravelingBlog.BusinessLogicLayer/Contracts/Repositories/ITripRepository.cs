﻿using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.BusinessLogicLayer.ViewModels.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;
using TravelingBlog.BusinessLogicLayer.ViewModels.TripViewModels;

namespace TravelingBlog.BusinessLogicLayer.Contracts.Repositories
{
    public interface ITripRepository : IRepository<Trip>
    {
        Task<IEnumerable<Trip>> GetAllTripsAsync();
        Task<Trip> GetTripByIdAsync(int tripId);
        bool IsUserCreator(int userId, int tripId);
        Trip GetTripWithPostBlogs(int id);
        //alexel37
        Task<IEnumerable<TripDetail>> GetUserTripsAsync(string id);
    }
}
