using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace TravelingBlog.DataAcceesLayer.Models.Entities
{
    [Table("UserImage")]
    public class UserImage
    {
        public int Id { get; set; }
        public string Path { get; set; }
        public int UserInfoId { get; set; }
        public UserInfo UserInfo { get; set; }
    }
}
