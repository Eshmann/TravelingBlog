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
    public class RatingService : Service<Rating, RatingDTO, RatingFilter>, IRatingService
    {
        new IUnitOfWork unitOfWork;
        public RatingService(IUnitOfWork unitOfWork, ILoggerManager logger, IMapper mapper)
            : base(unitOfWork, logger, mapper)
        {
            this.unitOfWork = unitOfWork;
        }


        public void AddRating(RatingDTO ratingDTO, string identityId)
        {
            var user = unitOfWork.GetRepository<UserInfo>().GetAll();
            var list = new Rating();
            foreach (var i in user)
            {
                if (i.IdentityId == identityId)
                {
                    list.Id = ratingDTO.Id;
                    list.TripId = ratingDTO.TripId;
                    list.UserInfoId = i.Id;
                    list.RatingPostBlog = ratingDTO.Rating;

                    var rtg = unitOfWork.GetRepository<Rating>().GetAll();
                    foreach(var item in rtg)
                    {
                        if(item.TripId==list.TripId && item.UserInfoId==list.UserInfoId)
                        {
                            return;
                        }
                    }

                    break;
                }
            }
            unitOfWork.GetRepository<Rating>().Add(list);
            unitOfWork.Complete();

        }

        protected override Expression<Func<Rating, bool>> GetFilter(RatingFilter filter)
        {
            Expression<Func<Rating, bool>> result = t => true;


            return result;
        }
    }
}



