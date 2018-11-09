using AdventureDb.Models;
using System.Collections.Generic;


namespace AdventureDb.Core.Repositories
{
    public interface IRoleRepository : IRepository<Role>
    {
        Role GetRoleWithUsers(int id);
    }
}
