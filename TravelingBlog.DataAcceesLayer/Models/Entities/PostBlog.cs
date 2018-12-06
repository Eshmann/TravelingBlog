using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using TravelingBlog.DataAcceesLayer.Contracts;

namespace TravelingBlog.DataAcceesLayer.Models.Entities
{
    [Table("PostBlog")]
    public class PostBlog : IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Plot { get; set; }
        public DateTime DateOfCreation { get; set; }
        public int TripId { get; set; }
        public Trip Trip { get; set; }
        public ICollection<TagPostBlog> TagPostBlogs { get; set; }
        public ICollection<Purchase> Purchases { get; set; }
        public ICollection<Image> Images { get; set; }
        public ICollection<CountryPostBlog> CountryPostBlogs { get; set; }
        public PostBlog()
        {
            TagPostBlogs = new List<TagPostBlog>();
            Purchases = new List<Purchase>();
            Images = new List<Image>();
            CountryPostBlogs = new List<CountryPostBlog>();
        }
    }
}
