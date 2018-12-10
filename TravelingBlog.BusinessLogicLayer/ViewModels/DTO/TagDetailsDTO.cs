using System;
using System.Collections.Generic;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using System.Text;

namespace TravelingBlog.BusinessLogicLayer.ViewModels.DTO
{
    public class TagDetailsDTO
    {
        public string Name { get; set; }

        public IEnumerable<TagTrip> TagTrips{get;set;}
        public IEnumerable<TagPostBlog> TagPostBlogs { get; set; }

        public TagDetailsDTO(Tag tag)
        {
            this.Name = tag.Name;
        }
    }
}
