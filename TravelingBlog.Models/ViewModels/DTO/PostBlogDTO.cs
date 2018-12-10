using System;

namespace TravelingBlog.Models.ViewModels.DTO
{
    public class PostBlogDTO
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public string Plot { get; set; }
        public DateTime DateOfCreation { get; set; } = DateTime.Now.Date;
        public int TripId { get; set; }
    }
}
