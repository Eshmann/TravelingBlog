using System.Collections.Generic;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.Models.ViewModels.DTO
{
    public class TripWithUserDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public int UserId { get; set; }
        public double? RatingTrip { get; set; }
        
        public UserInfo User { get; set; }

    }
}
