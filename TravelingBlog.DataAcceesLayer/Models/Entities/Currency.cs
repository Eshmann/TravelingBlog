using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using TravelingBlog.DataAcceesLayer.Contracts;

namespace TravelingBlog.DataAcceesLayer.Models.Entities
{
    [Table("Currency")]
    public class Currency : IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<Purchase> Purchases { get; set; }
        public Currency()
        {
            Purchases = new List<Purchase>();
        }
    }
}
