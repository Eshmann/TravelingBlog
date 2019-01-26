using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Linq.Expressions;
using System.Security.Claims;
using TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts;
using TravelingBlog.BusinessLogicLayer.SecondaryServices.LoggerService;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.DataAcceesLayer.Repositories.Contracts;
using TravelingBlog.Models;
using TravelingBlog.Models.Filters;
using TravelingBlog.Models.ViewModels.DTO;

namespace TravelingBlog.BusinessLogicLayer.ModelsServices
{
    public class PostBlogService : Service<PostBlog, PostBlogDTO, PostBlogFilter>, IPostBlogService
    {
        private readonly ITripService _tripService;
        private readonly ClaimsPrincipal _caller;

        public PostBlogService(IUnitOfWork unitOfWork, ILoggerManager logger, IMapper mapper, ITripService service, 
            IHttpContextAccessor http): base(unitOfWork, logger, mapper)
        {
            _tripService = service;
            _caller = http.HttpContext.User;
        }        

        public override Expression<Func<PostBlog, bool>> GetFilter(PostBlogFilter filter)
        {
            Expression<Func<PostBlog, bool>> result = t => true;

            if (filter.Name != null)
            {
                result = CombineExpressions(result, t => t.Name == filter.Name);
            }

            return result;
        }

        public override void Add(PostBlogDTO dto)
        {
            var tripRepo = unitOfWork.GetRepository<Trip>();
            var trip = tripRepo.Get(dto.TripId);
            if (trip == null)
                throw new ArgumentNullException("There is no corresponding trip for this postblog");
            var isCreator = _tripService.IsUserCreator(_caller, trip.Id);
            if (!isCreator)
                throw new 
                    Exception($"You are not allowed to modify content of this trip");
            var entity = mapper.Map<PostBlog>(dto);
            Repository.Add(entity);

            unitOfWork.Complete();
        }

        public override void Remove(int id)
        {
            var postBlog = Repository.FindAll(p=>p.Id==id).Include(p=>p.Trip).SingleOrDefault();

            CheckCreatorFunc(postBlog);

            Repository.Remove(postBlog);

            unitOfWork.Complete();
        }

        public override void Update(PostBlogDTO dto)
        {
            var postBlog = Repository.FindAll(p => p.Id == dto.Id).Include(p => p.Trip).SingleOrDefault();

            CheckCreatorFunc(postBlog);

            postBlog.Name = dto.Name;
            postBlog.Plot = dto.Plot;

            Repository.Update(postBlog);

            unitOfWork.Complete();
        }

        private void CheckCreatorFunc(PostBlog postBlog)
        {
            if (postBlog == null)
                throw new ArgumentNullException("PostBlog was already removed");
            var tripRepo = unitOfWork.GetRepository<Trip>();
            var trip = tripRepo.Get(postBlog.TripId);
            var isCreator = _tripService.IsUserCreator(_caller, trip.Id);
            if (!isCreator)
                throw new Exception
                ($"You are not allowed to modify this postblog");
        }
    }
}
