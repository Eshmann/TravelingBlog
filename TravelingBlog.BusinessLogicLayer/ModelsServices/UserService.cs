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
    public class UserService : IUserService
    {
        private readonly IUnitOfWork unitOfWork;

        public UserService(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        private IRepository<UserInfo> UserRepository => unitOfWork.GetRepository<UserInfo>();

        public async Task<UserInfo> GetUserInfoIncludingIdentity(string identityId)
        {
            return await UserRepository
                .GetAll()
                .Include(t => t.Identity)
                .SingleAsync(t => t.Identity.Id == identityId);
        }
    }
}
