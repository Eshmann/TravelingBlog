using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace AdventureDb.Models
{
    [Table("Post")]
    public class Post
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsDone { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public ICollection<PostBlog> PostBlogs { get; set; }
        public ICollection<Comment> Comments { get; set; }
        public ICollection<TagPost> TagPosts { get; set; }
        public Post()
        {
            PostBlogs = new List<PostBlog>();
            Comments = new List<Comment>();
            TagPosts = new List<TagPost>();
        }
    }
}
