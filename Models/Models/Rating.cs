using System.ComponentModel.DataAnnotations.Schema;

namespace AdventureDb.Models
{
    [Table("Rating")]
    public class Rating
    {
        public int UserId { get; set; }
        public int TripId { get; set; }
        public bool? RatingPostBlog { get; set; }
        public User User { get; set; }        
        public Trip Trip { get; set; }
    }
}