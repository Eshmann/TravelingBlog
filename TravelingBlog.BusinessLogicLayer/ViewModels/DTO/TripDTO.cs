using System;
using System.Collections.Generic;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using System.Text;

namespace TravelingBlog.BusinessLogicLayer.ViewModels.DTO
{
    public class TripDTO
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public bool IsDone { get; set; }
        public int? UserId { get; set; }
    }
}
