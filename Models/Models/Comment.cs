using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace AdventureDb.Models
{
    [Table("Comment")]
    public class Comment
    {
        public int UserId { get; set; }
        public int PostId { get; set; }
        public User User { get; set; }
        public Post Post { get; set; }
        public string Content { get; set; }
        
    }
}
