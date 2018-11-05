using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace AdventureDb.Models
{
    [Table("Country")]
    public class Country
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<User> Users { get; set; }
        public string MobCode { get; set; }
        public Country()
        {
            Users = new List<User>();
        }
    }
}