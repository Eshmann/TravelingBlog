using System;
using System.Linq;
using AdventureDb.Core.Repositories;
using Microsoft.EntityFrameworkCore;
using AdventureDb.Models;

namespace AdventureDb.Persistence.Repositories
{
    public class RoleRepository : Repository<Role>, IRoleRepository
    {
        public RoleRepository(DbContext context) : base(context)
        {
        }

        public Role GetRoleWithUsers(int id)
        {
            try
            {
                return AdventureBlogContext.Roles.Include(r => r.Users).SingleOrDefault(t => t.Id == id);
            }
            catch(ArgumentException)
            {
                return null;
            }
            catch(InvalidOperationException)
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
