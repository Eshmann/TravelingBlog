using System;
using System.Collections.Generic;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using System.Text;

namespace TravelingBlog.BusinessLogicLayer.ViewModels.DTO
{
    public class TripDetailsDTO
    {
        public string Name { get; set; }
        public bool IsDone { get; set; }

        public IEnumerable<PostBlog> PostBlogs { get; set; }
        public IEnumerable<Comment> Comments { get; set; }
        public IEnumerable<TagTrip> TagTrips { get; set; }
        public IEnumerable<CountryTrip> CountryTrips { get; set; }
        public IEnumerable<Rating> Ratings { get; set; }

        public TripDetailsDTO(Trip trip)
        {
            this.Name = trip.Name;
            this.IsDone = trip.IsDone;
        }
    }
}
