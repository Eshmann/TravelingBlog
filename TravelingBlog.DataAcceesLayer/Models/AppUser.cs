using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace TravelingBlog.DataAcceesLayer.Models.Entities
{
    public class AppUser : IdentityUser
    {
        //extended properties
        public long? FacebookId { get; set; }
        public string PictureUrl { get; set; }
        public ICollection<UserRole> UserRoles { get; set; }
    }
}
