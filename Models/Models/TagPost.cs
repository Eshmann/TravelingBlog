using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace AdventureDb.Models
{
    [Table("TagPost")]
    public class TagPost
    {
        public int TagId { get; set; }
        public int PostId { get; set; }
        public Tag Tag { get; set; }
        public Post Post { get; set; }
    }
}
