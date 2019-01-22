﻿using AutoMapper;
using Microsoft.EntityFrameworkCore;
using NLog.Filters;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts;
using TravelingBlog.BusinessLogicLayer.SecondaryServices.AzureStorage;
using TravelingBlog.BusinessLogicLayer.SecondaryServices.LoggerService;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.DataAcceesLayer.Repositories;
using TravelingBlog.DataAcceesLayer.Repositories.Contracts;
using TravelingBlog.Models.Filters;
using TravelingBlog.Models.ViewModels.DTO;

namespace TravelingBlog.BusinessLogicLayer.ModelsServices
{
    public class SettingsService : Service<UserInfo, SettingDTO, BaseFilter>, ISettingsService
    {
        public IAzureBlob azureBlob;
        readonly IUnitOfWork unitOfWork;
        public SettingsService(IUnitOfWork unitOfWork, ILoggerManager logger, IMapper mapper)
             : base(unitOfWork, logger, mapper)
        {
            this.unitOfWork = unitOfWork;
        }

        private IRepository<UserInfo> UserRepository => unitOfWork.GetRepository<UserInfo>();
        public void EditPhoto(SettingDTO settingDTO)
        {
            var image = unitOfWork.GetRepository<UserInfo>().GetAll().Where(u => u.IdentityId == settingDTO.Id)
                .Include(u => u.UserImage).SingleOrDefault();

            var userHsImg = image.UserImage == null ? false : true;

            if (!userHsImg)
            {
                var img = new UserImage
                {
                    Path = settingDTO.PhotoUser
                };
                //image.Include(t => t.UserImage);

                img.UserInfo = image;
                img.UserInfoId = image.Id;
                unitOfWork.GetRepository<UserImage>().Add(img);
            }
            else
            {
                image.UserImage.Path = settingDTO.PhotoUser;
                unitOfWork.GetRepository<UserImage>().Update(image.UserImage); 
            }

            unitOfWork.Complete();
        }

        public void EditUserName(SettingDTO settingDTO)
        {

            var user = unitOfWork.GetRepository<UserInfo>().GetAll();

            foreach (var i in user)
            {
                if (i.IdentityId == settingDTO.Id)
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
