using System.Collections.Generic;
using System.Threading.Tasks;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.BusinessLogicLayer.Contracts.Repositories
{
    public interface IUserRepository : IRepository<UserInfo>
    {
        Task<IEnumerable<UserInfo>> GetAllUsersAsync();
        Task<UserInfo> GetUserByIdAsync(int userId);
        Task<UserInfo> GetUserByIdentityId(string id);
    }
}
