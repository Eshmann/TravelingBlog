using System;
using System.Collections.Generic;
using System.Text;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.Models.ViewModels.DTO
{
    public class CountryDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string MobCode { get; set; }       
    }
}
