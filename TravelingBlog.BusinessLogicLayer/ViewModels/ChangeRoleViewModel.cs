using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity;

namespace TravelingBlog.BusinessLogicLayer.ViewModels
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
