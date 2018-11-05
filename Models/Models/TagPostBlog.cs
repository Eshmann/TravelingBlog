﻿using System.ComponentModel.DataAnnotations.Schema;

namespace AdventureDb.Models
{
    [Table("TagPostBlog")]
    public class TagPostBlog
    {
        public int TagId { get; set; }
        public int PostBlogId { get; set; }
        public Tag Tag { get; set; }        
        public PostBlog PostBlog { get; set; }        
    }
}
