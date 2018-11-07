﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace AdventureDb.Models
{
    [Table("Image")]
    public class Image
    {
        public int Id { get; set; }
        public string Path { get; set; }
        public int PostBlogId { get; set; }
        public PostBlog PostBlog { get; set; }
    }
}
