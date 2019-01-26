using TravelingBlog.Models.ViewModels.DTO;

namespace TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts
{
    public interface IRatingService
    {
        void AddRating(RatingDTO ratingDTO, string identityId);
    }
}
