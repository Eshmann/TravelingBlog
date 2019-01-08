using System;
using System.Collections.Generic;
using System.Text;

namespace TravelingBlog.Models.ViewModels.DTO
{
    public class SubscriptionDTO
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int UserInfoId { get; set; }
        public int SubcriberId { get; set; }
    }
}
