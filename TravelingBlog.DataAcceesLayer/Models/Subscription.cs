using System.ComponentModel.DataAnnotations.Schema;
using TravelingBlog.DataAcceesLayer.Contracts;

namespace TravelingBlog.DataAcceesLayer.Models.Entities
{
    [Table("Subscription")]
    public class Subscription : ICreatedByUser
    {
        public int UserInfoId { get; set; }
        public int SubcriberId { get; set; }
        public UserInfo UserInfoIdNavigation { get; set; }
        public UserInfo SubscriberIdNavidgation { get; set; }
    }
}
