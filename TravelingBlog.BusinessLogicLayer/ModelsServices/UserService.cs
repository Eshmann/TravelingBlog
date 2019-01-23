using System;
using AutoMapper;
using System.Linq;
using System.Linq.Expressions;
using TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts;
using TravelingBlog.BusinessLogicLayer.SecondaryServices.LoggerService;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.DataAcceesLayer.Repositories.Contracts;
using TravelingBlog.Models.Filters;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

namespace TravelingBlog.BusinessLogicLayer.ModelsServices
{
    public class UserService : Service<UserInfo, UserInfo, UserFilter>, IUserService
    {

        public UserService(IUnitOfWork unitOfWork, ILoggerManager logger, IMapper mapper)
            : base(unitOfWork, logger, mapper)
        {
        }

        private IRepository<UserInfo> UserRepository => unitOfWork.GetRepository<UserInfo>();

        public override void Add(UserInfo dto)
        {
            Repository.Add(dto);

            unitOfWork.Complete();
        }

        public override Expression<Func<UserInfo, bool>> GetFilter(UserFilter filter)
        {
            Expression<Func<UserInfo, bool>> result = t => true;

            if (filter.IdentityId != null)
            {
                result = CombineExpressions(result, t => t.IdentityId == filter.IdentityId);
            }

            return result;
        }

        public async Task<UserInfo> GetUserInfoIncludingIdentity(string identityId)
        {
            return await UserRepository
                .GetAll()
                .Include(t => t.Identity)
                .Include(t=>t.UserImage)
                .SingleAsync(t => t.Identity.Id == identityId);
        }

        public override void Remove(int id)
        {
            var entity = Repository.Get(id);
            if (entity == null)
                throw new Exception($"There is no user with id {id}");
            Repository.Remove(entity);

            unitOfWork.Complete();
        }

        public override void Update(UserInfo dto)
        {
            var entity = Repository.Get(dto.Id);
            if (entity == null)
                throw new Exception($"There is no user with id {dto.Id}");
            Repository.Update(dto);

            unitOfWork.Complete();
        }
    }
}
