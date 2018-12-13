using System.ComponentModel.DataAnnotations.Schema;
using TravelingBlog.DataAcceesLayer.Contracts;

namespace TravelingBlog.DataAcceesLayer.Models.Entities
{
    [Table("Comment")]
    public class Comment : ICreatedByUser
    {
        public int UserInfoId { get; set; }
        public int TripId { get; set; }
        public UserInfo UserInfo { get; set; }
        public Trip Trip { get; set; }
        public string Content { get; set; }
        
    }
}
