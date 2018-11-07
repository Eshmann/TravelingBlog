using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace AdventureDb.Models
{
    [Table("Country")]
    public class Country
    {
        public int Id { get; set; }
        public string Name { get; set; }        
        public string MobCode { get; set; }
        public ICollection<User> Users { get; set; }
        public ICollection<CountryTrip> CountryTrips { get; set; }
        public ICollection<CountryPostBlog> CountryPostBlogs { get; set; }
        public Country()
        {
            Users = new List<User>();
            CountryTrips = new List<CountryTrip>();
            CountryPostBlogs = new List<CountryPostBlog>();
        }
    }
}