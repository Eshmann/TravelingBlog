﻿using System.ComponentModel.DataAnnotations.Schema;

namespace AdventureDb.Models
{
    [Table("CountryPostBlog")]
    public class CountryPostBlog
    {
        public int CountryId { get; set; }
        public Country Country { get; set; }

        public int PostBlogId { get; set; }
        public PostBlog PostBlog { get; set; }
    }
}
