using System;
using System.Collections.Generic;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using System.Text;

namespace TravelingBlog.BusinessLogicLayer.ViewModels.DTO
{
    public class TripDetailsDTO
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public bool IsDone { get; set; }
        public int? UserId { get; set; } 
        public string Description { get; set; }
        public IEnumerable<PostBlogDTO> PostBlogs { get; set; }
        public IEnumerable<CommentDTO> Comments { get; set; }
        public IEnumerable<TagDTO> TagTrips { get; set; }
        public IEnumerable<CountryDTO> CountryTrips { get; set; }
        public IEnumerable<RatingDTO> Ratings { get; set; }

        public TripDetailsDTO(Trip trip)
        {
            this.Id = trip.Id;
            this.Name = trip.Name;
            this.IsDone = trip.IsDone;
            this.Description = trip.Description;
        }
    }
}
