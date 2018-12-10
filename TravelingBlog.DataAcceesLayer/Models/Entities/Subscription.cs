using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace TravelingBlog.DataAcceesLayer.Models.Entities
{
    [Table("Subscription")]
    public class Subscription
    {
        public int UserInfoId { get; set; }
        public int SubcriberId { get; set; }
        public UserInfo UserInfoIdNavigation { get; set; }
        public UserInfo SubscriberIdNavidgation { get; set; }
    }
}
