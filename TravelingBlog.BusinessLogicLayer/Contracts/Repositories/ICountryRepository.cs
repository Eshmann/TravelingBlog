using TravelingBlog.DataAcceesLayer.Models.Entities;
using System.Collections.Generic;
using TravelingBlog.BusinessLogicLayer.ViewModels.DTO;

namespace TravelingBlog.BusinessLogicLayer.Contracts.Repositories
{
    public interface ICountryRepository: IRepository<Country>
    {
        IEnumerable<Country> GetAllCountries();
        Country GetCountryById(int countryId);
    }
}
