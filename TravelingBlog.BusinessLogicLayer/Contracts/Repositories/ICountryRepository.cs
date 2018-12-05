using System.Collections.Generic;
using System.Threading.Tasks;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.BusinessLogicLayer.Contracts.Repositories
{
    public interface ICountryRepository: IRepository<Country>
    {
        Task<IEnumerable<Country>> GetAllCountriesAsync();
        Task<Country> GetCountryByIdAsync(int countryId);
    }
}
