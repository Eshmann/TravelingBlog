using System.Collections.Generic;

namespace TravelingBlog.Models.ViewModels
{
    public class ChangeRoleViewModel
    {
        public string UserId { get; set; }
        public string UserName { get; set; } 
        public IList<string> UserRoles { get; set; }
        public ChangeRoleViewModel()
        {
            UserRoles = new List<string>();
        }
    }
}
