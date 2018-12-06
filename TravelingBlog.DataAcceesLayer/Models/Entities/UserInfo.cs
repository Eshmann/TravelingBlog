using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;
using TravelingBlog.DataAcceesLayer.Contracts;

namespace TravelingBlog.DataAcceesLayer.Models.Entities
{
    [Table("UserInfo")]
    public class UserInfo : IEntity
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string IdentityId { get; set; }
        public AppUser Identity { get; set; }

        [RegularExpression(@"0[0-9]{9}")]
        public string Phone { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public int? CountryId { get; set; }
        public Country Country { get; set; }
        public UserImage UserImage { get; set; }
        public ICollection<Subscription> RelationWithUserIdNavigation { get; set; }
        public ICollection<Subscription> RelationWithSubscriberIdNavigation { get; set; }
        public ICollection<Trip> Trips { get; set; }
        public ICollection<Comment> Comments { get; set; }
        public ICollection<Rating> Ratings { get; set; }
        public UserInfo()
        {
            RelationWithUserIdNavigation = new List<Subscription>();
            RelationWithSubscriberIdNavigation = new List<Subscription>();
            Trips = new List<Trip>();
            Comments = new List<Comment>();
            Ratings = new List<Rating>();
        }
    }
}
