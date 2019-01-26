using System.ComponentModel.DataAnnotations.Schema;
using TravelingBlog.DataAcceesLayer.Contracts;

namespace TravelingBlog.DataAcceesLayer.Models.Entities
{
    [Table("Rating")]
    public class Rating:IEntity
    {
        public int Id { get; set; }
        public int UserInfoId { get; set; }
        public int TripId { get; set; }
        public double RatingPostBlog { get; set; }
        public UserInfo UserInfo { get; set; }        
        public Trip Trip { get; set; }
    }
}