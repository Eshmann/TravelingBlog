using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace TravelingBlog.DataAcceesLayer.Models.Entities
{
    [Table("TagTrip")]
    public class TagTrip
    {
        public int TagId { get; set; }
        public int TripId { get; set; }
        public Tag Tag { get; set; }
        public Trip Post { get; set; }
    }
}
