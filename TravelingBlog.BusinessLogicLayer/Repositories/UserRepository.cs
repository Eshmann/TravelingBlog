using System;
using System.Collections.Generic;
using System.Linq;
using TravelingBlog.BusinessLogicLayer.Contracts.Repositories;
using Microsoft.EntityFrameworkCore;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.DataAcceesLayer.Data;
using System.Threading.Tasks;

namespace TravelingBlog.BusinessLogicLayer.Repositories
{
    public class UserRepository : Repository<UserInfo>, IUserRepository
    {
        public UserRepository(ApplicationDbContext applicationDbContext) : base(applicationDbContext)
        {

        }

        public async Task<UserInfo> GetUserByIdAsync(int userId)
        {
            return await SingleOrDefaultAsync(c => c.Id.Equals(userId));
        }

        public async Task<IEnumerable<UserInfo>> GetAllUsersAsync()
        {
            var userInfoes = await FindAllAsync();
            return userInfoes.OrderBy(c => c.FirstName);
        }
    }
}
