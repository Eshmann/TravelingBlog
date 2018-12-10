using System;
using System.Collections.Generic;
using System.Text;

namespace TravelingBlog.BusinessLogicLayer.ViewModels.DTO
{
    public class UserInfoWithImage
    {
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string location { get; set; }
        public string pictureUrl { get; set; }
    }
}
