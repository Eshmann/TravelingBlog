using System;
using System.Collections.Generic;
using System.Text;

namespace TravelingBlog.Models.ViewModels.DTO
{
    public class UserInfoDTO
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string PictureUrl { get; set; }
        public long? FacebookId { get; set; }
    }
}
