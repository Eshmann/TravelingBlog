using System;
using System.Collections.Generic;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using System.Text;

namespace TravelingBlog.BusinessLogicLayer.ViewModels.DTO
{
    public class PostBlogDTO
    {
        public string Name { get; set; }
        public string Plot { get; set; }
        public DateTime DateOfCreation { get; set; }
    }
}
