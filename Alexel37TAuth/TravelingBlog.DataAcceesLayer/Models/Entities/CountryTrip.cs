using System.ComponentModel.DataAnnotations.Schema;

namespace TravelingBlog.DataAcceesLayer.Models.Entities
{
    [Table("CountryTrip")]
    public class CountryTrip
    {
        public int CountryId { get; set; }
        public int TripId { get; set; }
        public Country Country { get; set; }
        public Trip Trip { get; set; }
    }
}
