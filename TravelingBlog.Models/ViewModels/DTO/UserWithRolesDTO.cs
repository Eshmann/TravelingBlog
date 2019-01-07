using System;
using System.Collections.Generic;
using System.Text;

namespace TravelingBlog.Models.ViewModels.DTO
{
    public class UserWithRolesDTO
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public IEnumerable<string> Roles { get; set; }
    }
}
