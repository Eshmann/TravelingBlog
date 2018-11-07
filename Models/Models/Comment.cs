﻿using System.ComponentModel.DataAnnotations.Schema;

namespace AdventureDb.Models
{
    [Table("Comment")]
    public class Comment
    {
        public int UserId { get; set; }
        public int TripId { get; set; }
        public User User { get; set; }
        public Trip Trip { get; set; }
        public string Content { get; set; }
        
    }
}
