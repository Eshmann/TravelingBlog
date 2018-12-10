using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using TravelingBlog.DataAcceesLayer.Contracts;

namespace TravelingBlog.DataAcceesLayer.Models.Entities
{
    [Table("Trip")]
    public class Trip : IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsDone { get; set; }
        public string Description { get; set; }
        public int UserInfoId { get; set; }
        public double RatingTrip { get; set; }
        public UserInfo UserInfo { get; set; }
        public ICollection<PostBlog> PostBlogs { get; set; }
        public ICollection<Comment> Comments { get; set; }
        public ICollection<TagTrip> TagTrips { get; set; }
        public ICollection<CountryTrip> CountryTrips { get; set; }
        public ICollection<Rating> Ratings { get; set; }
        public Trip()
        {
            PostBlogs = new List<PostBlog>();
            Comments = new List<Comment>();
            TagTrips = new List<TagTrip>();
            CountryTrips = new List<CountryTrip>();
            Ratings = new List<Rating>();
        }
    }
}
