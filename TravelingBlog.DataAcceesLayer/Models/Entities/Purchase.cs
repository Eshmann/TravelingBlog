using System.ComponentModel.DataAnnotations.Schema;

namespace TravelingBlog.DataAcceesLayer.Models.Entities
{
    [Table("Purchase")]
    public class Purchase
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public double AmountSpent { get; set; }
        public int PostBlogId { get; set; }
        public PostBlog PostBlog { get; set; }
        public int CurrencyId { get; set; }
        public  Currency Currency { get; set; }
    }
}