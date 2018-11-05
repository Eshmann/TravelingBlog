using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace AdventureDb.Models
{
    [Table("Role")]
    public class Role
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<User> Users { get; set; }
        public Role()
        {
            Users = new List<User>();
        }
    }
}