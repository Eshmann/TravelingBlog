using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TravelingBlog.Models;
using TravelingBlog.Models.Filters;
using TravelingBlog.Models.ViewModels.DTO;

namespace TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts
{
    public interface IRatingService : IService<RatingDTO, RatingFilter>
    {
        void AddRating(RatingDTO ratingDTO, string identityId);
        //IQueryable<RatingDTO> AddRating(double ratingTrip);
        //  IEnumerable<RatingDTO> GetAllRating(double ratingTrip);
        // IEnumerable<TripDTO> GetRating(int Id);
    }
}
