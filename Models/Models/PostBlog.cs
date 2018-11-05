using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace AdventureDb.Models
{
    [Table("PostBlog")]
    public class PostBlog
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Plot { get; set; }
        public DateTime DateOfCreation { get; set; }
        public int PostId { get; set; }
        public Post Post { get; set; }
        public ICollection<TagPostBlog> TagPostBlogs { get; set; }
        public ICollection<Purchase> Purchases { get; set; }
        public ICollection<Rating> Ratings { get; set; }
        public PostBlog()
        {
            TagPostBlogs = new List<TagPostBlog>();
            Purchases = new List<Purchase>();
            Ratings = new List<Rating>();
        }
    }
}
