using System.Collections.Generic;
using TravelingBlog.DataAcceesLayer.Models.Entities;


namespace TravelingBlog.BusinessLogicLayer.ViewModels.DTO
{
    public class CurrencyDTO
    {
        public string Name { get; set; }
        public IEnumerable<Purchase> Purchases { get; set; }
    }
}
