using System;
using System.Collections.Generic;
using System.Text;

namespace TravelingBlog.Models.ViewModels.DTO
{
    public class TripDTODa
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool IsDone { get; set; }
        public string Description { get; set; }
        public double RatingTrip { get; set; }
        public int CommentsNumber { get; set; }
        public UserInfoDTO User { get; set; }
    }
}
