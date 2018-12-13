using System.ComponentModel.DataAnnotations.Schema;
using TravelingBlog.DataAcceesLayer.Contracts;

namespace TravelingBlog.DataAcceesLayer.Models.Entities
{
    [Table("Rating")]
    public class Rating : ICreatedByUser
    {
        public int UserInfoId { get; set; }
        public int TripId { get; set; }
        public bool? RatingPostBlog { get; set; }
        public UserInfo UserInfo { get; set; }        
        public Trip Trip { get; set; }
    }
}