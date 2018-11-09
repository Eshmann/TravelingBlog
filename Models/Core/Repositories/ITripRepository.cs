using AdventureDb.Models;
using System.Collections.Generic;

namespace AdventureDb.Core.Repositories
{
    public interface ITripRepository : IRepository<Trip>
    {
        IEnumerable<Trip> GetTripsWithUser(int pageIndex, int pageSize);
        IEnumerable<Trip> GetTopTrips(int count);
        Trip GetTripWithTags(int id);
        Trip GetTripWithCountries(int id);
        Trip GetTripWithPostBlogs(int id);
        Trip GetTripWithComments(int id);
        Trip GetTripWithViews(int id);
    }
}
