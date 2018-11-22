using System;
using System.Collections.Generic;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using System.Text;

namespace TravelingBlog.BusinessLogicLayer.ViewModels.DTO
{
    public class GetTripDTO
    {
        public string Name { get; set; }
        public bool IsDone { get; set; }
        public string Description { get; set; }
        public int Rating { get; set; }
        public string Author { get; set; }

        public IEnumerable<TagDTO> Tags { get; set; }
        public IEnumerable<CountryDTO> Countries { get; set; }
    }
}
