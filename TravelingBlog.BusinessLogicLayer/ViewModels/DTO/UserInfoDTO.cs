using System;
using System.ComponentModel.DataAnnotations;

namespace TravelingBlog.BusinessLogicLayer.ViewModels.DTO
{
    public class UserInfoDTO
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        [RegularExpression(@"0[0-9]{9}")]
        public string Phone { get; set; }
        public DateTime? DateOfBirth { get; set; }
    }
}
