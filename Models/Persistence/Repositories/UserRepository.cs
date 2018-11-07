using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using AdventureDb.Core.Repositories;
using Microsoft.EntityFrameworkCore;
using AdventureDb.Models;

namespace AdventureDb.Persistence.Repositories
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        public UserRepository(DbContext context) : base(context)
        {

        }

        public IEnumerable<User> GetUsersWithCountry()
        {

            try
            {
                return AdventureBlogContext.Users.Include(u => u.Country).ToList();
            }
            catch(ArgumentNullException)
            {
                return null;
            }
        }

        public IEnumerable<User> GetUsersWithRole()
        {
            try
            {
                return AdventureBlogContext.Users.Include(u => u.Role).ToList();
            }
            catch(ArgumentNullException)
            {
                return null;
            }
        }

        public User GetUserWithComments(int id)
        {
            try
            {
                return AdventureBlogContext.Users.Include(u => u.Comments).SingleOrDefault(u => u.Id == id);
            }
            catch(ArgumentNullException)
            {
                return null;
            }
            catch(InvalidOperationException)
            {
                return null;
            }
        }

        public User GetUserWithRatings(int id)
        {
            try
            {
                return AdventureBlogContext.Users.Include(u => u.Ratings).SingleOrDefault(u => u.Id == id);
            }
            catch (ArgumentNullException)
            {
                return null;
            }
            catch (InvalidOperationException)
            {
                return null;
            }
        }
        //повертає підписників користувача
        public User GetUserWithSubscribers(int id)
        {
            try
            {
                return AdventureBlogContext.Users.Include(u => u.RelationWithSubscriberIdNavigation).SingleOrDefault(u => u.Id == id);
            }
            catch (ArgumentNullException)
            {
                return null;
            }
            catch (InvalidOperationException)
            {
                return null;
            }
        }
        //повертає людей на яких користувач підписався
        public User GetUserWithSubscriptions(int id)
        {
            try
            {
                return AdventureBlogContext.Users.Include(u => u.RelationWithUserIdNavigation).SingleOrDefault(u => u.Id == id);
            }
            catch (ArgumentNullException)
            {
                return null;
            }
            catch (InvalidOperationException)
            {
                return null;
            }
        }

        public User GetUserWithTrips(int id)
        {
            try
            {
                return AdventureBlogContext.Users.Include(u => u.Trips).SingleOrDefault(u => u.Id == id);
            }
            catch (ArgumentNullException)
            {
                return null;
            }
            catch (InvalidOperationException)
            {
                return null;
            }
        }
        public AdventureBlogContext AdventureBlogContext
        {
            get { return Context as AdventureBlogContext; }
        }
    }
}
