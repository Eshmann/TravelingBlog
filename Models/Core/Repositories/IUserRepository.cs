using AdventureDb.Models;
using System.Collections.Generic;

namespace AdventureDb.Core.Repositories
{
    public interface IUserRepository : IRepository<User>
    {
        IEnumerable<User> GetUsersWithRole();
        IEnumerable<User> GetUsersWithCountry();
        User GetUserWithTrips(int id);
        User GetUserWithSubscriptions(int id);
        User GetUserWithSubscribers(int id);
        User GetUserWithComments(int id);
        User GetUserWithRatings(int id);
    }
}
