using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using TravelingBlog.DataAcceesLayer.Contracts;

namespace TravelingBlog.DataAcceesLayer.Models.Entities
{
    [Table("Tag")]
    public class Tag : IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<TagTrip> TagTrips{get;set;}
        public ICollection<TagPostBlog> TagPostBlogs { get; set; }
        public Tag()
        {
            TagTrips = new List<TagTrip>();
            TagPostBlogs = new List<TagPostBlog>();
        }
    }
}