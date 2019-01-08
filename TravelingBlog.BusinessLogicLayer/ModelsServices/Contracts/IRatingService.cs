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
<<<<<<< HEAD
    
=======
>>>>>>> eb7c33bfe09b2b9c8ff6bed3d9d39a8e383e2df3
    }
}
