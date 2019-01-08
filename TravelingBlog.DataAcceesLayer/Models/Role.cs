using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace TravelingBlog.DataAcceesLayer.Models
{
    public class Role:IdentityRole<string>
    {
        public ICollection<UserRole> UserRoles { get; set; }
    }
}
