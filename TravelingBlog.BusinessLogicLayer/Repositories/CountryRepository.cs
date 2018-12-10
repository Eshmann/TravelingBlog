using System;
using System.Linq;
using TravelingBlog.BusinessLogicLayer.Contracts.Repositories;
using Microsoft.EntityFrameworkCore;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.DataAcceesLayer.Data;
using TravelingBlog.BusinessLogicLayer.ViewModels.DTO;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TravelingBlog.BusinessLogicLayer.Repositories
{
    public class CountryRepository : Repository<Country>, ICountryRepository
    {
        public CountryRepository(ApplicationDbContext applicationDbContext) : base(applicationDbContext)
        {
        }

        public async Task<Country> GetCountryByIdAsync(int countryId)
        {
            return await SingleOrDefaultAsync(c => c.Id.Equals(countryId));
        }

        public async Task<IEnumerable<Country>> GetAllCountriesAsync()
        {
            var countries = await FindAllAsync();
            return countries.OrderBy(c => c.Name);
        }


    }
}
