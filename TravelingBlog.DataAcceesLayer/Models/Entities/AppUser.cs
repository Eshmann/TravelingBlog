using Microsoft.AspNetCore.Identity;

namespace TravelingBlog.DataAcceesLayer.Models.Entities
{
    public class AppUser : IdentityUser
    {
        //extended properties
        public long? FacebookId { get; set; }
        public string PictureUrl { get; set; }
    }
}
