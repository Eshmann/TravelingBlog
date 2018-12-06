using TravelingBlog.DataAcceesLayer.Models.Entities;
using System.Collections.Generic;
using System.Linq;
using TravelingBlog.BusinessLogicLayer.ViewModels.DTO;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.ValueGeneration.Internal;

namespace TravelingBlog.BusinessLogicLayer.Contracts.Repositories
{
    public interface ICountryRepository: IRepository<Country>
    {
        Task<IEnumerable<Country>> GetAllCountriesAsync();
        Task<Country> GetCountryByIdAsync(int countryId);
    }
}
