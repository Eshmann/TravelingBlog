using System;
using System.Collections.Generic;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using System.Text;

namespace TravelingBlog.BusinessLogicLayer.ViewModels.DTO
{
    public class PostBlogDetailsDTO
    {
        public string Name { get; set; }
        public string Plot { get; set; }
        public DateTime DateOfCreation { get; set; }

        public IEnumerable<TagPostBlog> TagPostBlogs { get; set; }
        public IEnumerable<Purchase> Purchases { get; set; }
        public IEnumerable<Image> Images { get; set; }
        public IEnumerable<CountryPostBlog> CountryPostBlogs { get; set; }

        public PostBlogDetailsDTO(PostBlog postBlog)
        {
            this.Name = postBlog.Name;
            this.Plot = postBlog.Plot;
            this.DateOfCreation = postBlog.DateOfCreation;
        }
    }
}
