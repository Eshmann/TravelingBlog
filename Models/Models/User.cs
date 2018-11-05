using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace AdventureDb.Models
{
    [Table("User")]
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        [RegularExpression(@"0[0-9]{9}")]
        public string Phone { get; set; }
        public DateTime? DateOfBirth { get; set; }
        public int? CountryId { get; set; }
        public Country Country { get; set; }
        public int RoleId { get; set; }
        public Role Role { get; set; }
        public ICollection<Subscription> RelationWithUserIdNavigation { get; set; }
        public ICollection<Subscription> RelationWithSubscriberIdNavigation { get; set; }
        public ICollection<Post> Posts { get; set; }
        public ICollection<Comment> Comments { get; set; }
        public ICollection<Rating> Ratings { get; set; }
        public User()
        {
            RelationWithUserIdNavigation = new List<Subscription>();
            RelationWithSubscriberIdNavigation = new List<Subscription>();
            Posts = new List<Post>();
            Comments = new List<Comment>();
            Ratings = new List<Rating>();
        }
    }
}
