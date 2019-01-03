using System.Collections.Generic;

namespace TravelingBlog.Models.ViewModels.DTO
{
    public class TripWithPostBlogsDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsDone { get; set; }
        public string Description { get; set; }
        public UserInfoDTO User { get; set; }
        public IEnumerable<PostBlogDTO> PostBlogs { get; set; }
    }
}
