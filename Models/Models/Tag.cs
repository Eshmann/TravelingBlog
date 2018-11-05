using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace AdventureDb.Models
{
    [Table("Tag")]
    public class Tag
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<TagPost> TagPosts{get;set;}
        public ICollection<TagPostBlog> TagPostBlogs { get; set; }
        public Tag()
        {
            TagPosts = new List<TagPost>();
            TagPostBlogs = new List<TagPostBlog>();
        }
    }
}
