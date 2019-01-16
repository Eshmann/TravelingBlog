using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts;
using TravelingBlog.BusinessLogicLayer.SecondaryServices.LoggerService;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.DataAcceesLayer.Repositories;
using TravelingBlog.DataAcceesLayer.Repositories.Contracts;
using TravelingBlog.Models;
using TravelingBlog.Models.Filters;
using TravelingBlog.Models.ViewModels.DTO;

namespace TravelingBlog.BusinessLogicLayer.ModelsServices
{
    public class RatingService : IRatingService
    {
        private readonly IUnitOfWork unitOfWork;

        public RatingService(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        public void AddRating(RatingDTO ratingDTO, string identityId)
        {
            var user = unitOfWork.GetRepository<UserInfo>().Find(u => u.IdentityId == identityId);
            var list = new Rating
            {
                TripId = ratingDTO.TripId,
                UserInfoId = user.Id,
                RatingPostBlog = ratingDTO.Rating
            };

            var rtg = unitOfWork.GetRepository<Rating>()
                .Find(item=> item.TripId == list.TripId && item.UserInfoId == list.UserInfoId);
            unitOfWork.GetRepository<Rating>().Add(list);
            unitOfWork.Complete();
           }
    }
}



