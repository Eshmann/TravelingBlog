using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using TravelingBlog.DataAcceesLayer.Contracts;

namespace TravelingBlog.DataAcceesLayer.Models.Entities
{
    [Table("Image")]
    public class Image : IEntity
    {
        public int Id { get; set; }
        public string Path { get; set; }
        public int PostBlogId { get; set; }
        public PostBlog PostBlog { get; set; }
    }
}
