using AdventureDb.Models;
using System.Collections.Generic;


namespace AdventureDb.Core.Repositories
{
    public interface ICountryRepository : IRepository<Country>
    {
        Country GetCountryWithUsers(int id);
        Country GetCountryWithTrips(int id);
        Country GetCountryWithPostBlogs(int id);
    }
}
