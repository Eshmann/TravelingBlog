using System.ComponentModel.DataAnnotations.Schema;

namespace AdventureDb.Models
{
    [Table("Rating")]
    public class Rating
    {
        public int UserId { get; set; }
        public int PostBlogId { get; set; }
        public int RatingPostBlog { get; set; }
        public User User { get; set; }
        public PostBlog PostBlog { get; set; }
    }
}