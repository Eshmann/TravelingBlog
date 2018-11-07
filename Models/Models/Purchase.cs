﻿using System.ComponentModel.DataAnnotations.Schema;

namespace AdventureDb.Models
{
    [Table("Purchase")]
    public class Purchase
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public double AmountSpent { get; set; }
        public int PostBlogId { get; set; }
        public PostBlog PostBlog { get; set; }
    }
}