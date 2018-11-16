using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.BusinessLogicLayer.ViewModels.DTO;
using System.Collections.Generic;

namespace TravelingBlog.BusinessLogicLayer.Contracts.Repositories
{
    public interface IUserRepository : IRepository<UserInfo>
    {
        IEnumerable<UserInfo> GetAllUsers();
        UserInfo GetUserById(int userId);
    }
}
