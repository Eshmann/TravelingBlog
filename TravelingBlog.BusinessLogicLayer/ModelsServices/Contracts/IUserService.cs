using System.Threading.Tasks;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.Models.Filters;

namespace TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts
{
    public interface IUserService:IService<UserInfo,UserFilter>
    {
        Task<UserInfo> GetUserInfoIncludingIdentity(string identityId);
    }
}
