using System.ComponentModel.DataAnnotations.Schema;

namespace TravelingBlog.DataAcceesLayer.Models.Entities
{
    [Table("Comment")]
    public class Comment
    {
        public int UserInfoId { get; set; }
        public int TripId { get; set; }
        public UserInfo UserInfo { get; set; }
        public Trip Trip { get; set; }
        public string Content { get; set; }
        
    }
}
