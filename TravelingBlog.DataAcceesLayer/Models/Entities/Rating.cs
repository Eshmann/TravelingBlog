using System.ComponentModel.DataAnnotations.Schema;

namespace TravelingBlog.DataAcceesLayer.Models.Entities
{
    [Table("Rating")]
    public class Rating
    {
        public int UserInfoId { get; set; }
        public int TripId { get; set; }
        public double? RatingPostBlog { get; set; }
        public UserInfo UserInfo { get; set; }        
        public Trip Trip { get; set; }
    }
}