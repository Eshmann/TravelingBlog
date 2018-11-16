using System;
using System.Linq;
using TravelingBlog.BusinessLogicLayer.Contracts.Repositories;
using Microsoft.EntityFrameworkCore;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.DataAcceesLayer.Data;
using TravelingBlog.BusinessLogicLayer.ViewModels.DTO;
using System.Collections.Generic;

namespace TravelingBlog.BusinessLogicLayer.Repositories
{
    public class CountryRepository : Repository<Country>, ICountryRepository
    {
        public CountryRepository(ApplicationDbContext applicationDbContext) : base(applicationDbContext)
        {
        }

        public Country GetCountryById(int countryId)
        {
            return SingleOrDefault(c => c.Id.Equals(countryId));
        }

        public IEnumerable<Country> GetAllCountries()
        {
            return FindAll()
                .OrderBy(c => c.Name);
        }
    }
}
