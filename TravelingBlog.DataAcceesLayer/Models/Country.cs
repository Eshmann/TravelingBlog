using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using TravelingBlog.DataAcceesLayer.Contracts;

namespace TravelingBlog.DataAcceesLayer.Models.Entities
{
    [Table("Country")]
    public class Country : IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }        
        public string MobCode { get; set; }

        public ICollection<UserInfo> UserInfoes { get; set; }
        public ICollection<CountryTrip> CountryTrips { get; set; }
        public ICollection<CountryPostBlog> CountryPostBlogs { get; set; }
        public Country()
        {
            UserInfoes = new List<UserInfo>();
            CountryTrips = new List<CountryTrip>();
            CountryPostBlogs = new List<CountryPostBlog>();
        }
    }
}