using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace AdventureDb.Models
{
    [Table("UserImage")]
    public class UserImage
    {
        public int Id { get; set; }
        public string Path { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
