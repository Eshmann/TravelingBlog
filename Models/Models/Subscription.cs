using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace AdventureDb.Models
{
    [Table("Subscription")]
    public class Subscription
    {
        public int UserId { get; set; }
        public int SubcriberId { get; set; }
        public User UserIdNavigation { get; set; }
        public User SubscriberIdNavidgation { get; set; }
    }
}
