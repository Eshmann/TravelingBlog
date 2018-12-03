using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using System.Text;

namespace TravelingBlog.BusinessLogicLayer.ViewModels.DTO
{
    public class UserInfoDetailsDTO
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        [RegularExpression(@"0[0-9]{9}")]
        public string Phone { get; set; }
        public DateTime? DateOfBirth { get; set; }

        public IEnumerable<Subscription> RelationWithUserIdNavigation { get; set; }
        public IEnumerable<Subscription> RelationWithSubscriberIdNavigation { get; set; }
        public IEnumerable<Trip> Trips { get; set; }
        public IEnumerable<Comment> Comments { get; set; }
        public IEnumerable<Rating> Ratings { get; set; }

        public UserInfoDetailsDTO(UserInfo userInfo)
        {
            this.FirstName = userInfo.FirstName;
            this.LastName = userInfo.LastName;
            this.Phone = userInfo.Phone;
            this.DateOfBirth = userInfo.DateOfBirth;
        }
    }
}
