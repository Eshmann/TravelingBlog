using Microsoft.AspNetCore.Identity;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.DataAcceesLayer.Models
{
    public class UserRole:IdentityUserRole<string>
    {
        public AppUser User { get; set; }
        public Role Role { get; set; }
    }
}
