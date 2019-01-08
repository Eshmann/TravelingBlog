using AutoMapper;
using NLog.Filters;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;
using TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts;
using TravelingBlog.BusinessLogicLayer.SecondaryServices.LoggerService;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.DataAcceesLayer.Repositories;
using TravelingBlog.DataAcceesLayer.Repositories.Contracts;
using TravelingBlog.Models.Filters;
using TravelingBlog.Models.ViewModels.DTO;

namespace TravelingBlog.BusinessLogicLayer.ModelsServices
{
    public class SettingsService: Service<UserInfo, SettingDTO, BaseFilter> , ISettingsService
    {
        readonly IUnitOfWork unitOfWork;
        public SettingsService(IUnitOfWork unitOfWork, ILoggerManager logger, IMapper mapper)
             : base(unitOfWork, logger, mapper) {
            this.unitOfWork = unitOfWork;
        }

        private IRepository<UserInfo> UserRepository => unitOfWork.GetRepository<UserInfo>();

        public  void EditUserName(SettingDTO settingDTO)
        {

            var user = unitOfWork.GetRepository<UserInfo>().GetAll();
            foreach(var i in user)
            {
                if(i.IdentityId == settingDTO.Id)
                {
                    i.FirstName = settingDTO.FirstName;
                    i.LastName = settingDTO.LastName;
                    unitOfWork.GetRepository<UserInfo>().Update(i);
                }
            }
            unitOfWork.Complete();
        }
        public override Expression<Func<UserInfo, bool>> GetFilter(BaseFilter filter)
        {
            Expression<Func<UserInfo, bool>> result = t => true;

            return result;
        }
    }
}
