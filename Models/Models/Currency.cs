using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;


namespace AdventureDb.Models
{
    [Table("Currency")]
    public class Currency
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
