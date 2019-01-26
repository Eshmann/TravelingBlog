using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.Models.ViewModels.DTO
{
    public class RatingDTO
    {
        public double Rating { get; set; }
        public int? UserId { get; set; }
        public int TripId { get; set; }
        public int? Id { get; set; }
    }
}