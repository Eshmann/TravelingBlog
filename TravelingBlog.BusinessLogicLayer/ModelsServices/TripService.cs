using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
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
    public class TripService : Service<Trip, TripDTO, TripFilter>, ITripService
    {
        private readonly ClaimsPrincipal _caller;

        public TripService(IUnitOfWork unitOfWork, ILoggerManager logger, IMapper mapper, 
            IHttpContextAccessor http): base(unitOfWork, logger, mapper)
        {
            _caller = http.HttpContext.User;
        }

        private IRepository<UserInfo> UserRepository => unitOfWork.GetRepository<UserInfo>();

        public TripWithPostBlogsDTO GetTripWithPostBlogs(TripFilter filter)
        {
            Expression<Func<Trip, bool>> predicate = GetFilter(filter);
            var entity = Repository
              .FindAll(predicate)
              .Include(t => t.PostBlogs)
              .SingleOrDefault();

            var result = mapper.Map<TripWithPostBlogsDTO>(entity);

            return result;
        }

        public IList<TripDTODa> GetTripsPage(PagingModel pageModel, out int total)
        {
            var trips = Repository
                .GetAll()
                .Include(t => t.UserInfo)
                .ThenInclude(u => u.Identity)
                .OrderBy(t => t.Name)
                .ThenBy(x => x.Description)
                .ToList();

            total = trips.Count();

            var result = trips
                .Skip(pageModel.PageSize * (pageModel.PageNumber - 1))
                .Take(pageModel.PageSize)
                .ToList();

            return result.Select(t => mapper.Map<TripDTODa>(t)).ToList();
        }

        public IEnumerable<TripDTO> GetUserTrips(string id)
        {
            var user = UserRepository
                .GetAll()
                .Include(t => t.Identity)
                .Single(t => t.Identity.Id == id);

            var userTrips = Repository
                .GetAll()
                .Where(x => x.UserInfoId == user.Id);

            return userTrips.Select(t => mapper.Map<TripDTO>(t));
        }

        public IList<TripWithUserDTO> GetTripsWithHighestRating()
        {
            var tripsCount = Repository.GetAll().Count();
            List<TripWithUserDTO> trips = new List<TripWithUserDTO>();


            var result = Repository
                    .GetAll().Include(x => x.UserInfo)
                    .OrderByDescending(t => t.RatingTrip)
                    .Take(3)
                    .Include(x => x.UserInfo)
                    .ToList();
           

            foreach (var r in result)
            {
                trips.Add(new TripWithUserDTO
                {
                    Id = r.Id,
                    Name = r.Name,
                    Description = r.Description,
                    FirstName = r.UserInfo.FirstName,
                    LastName = r.UserInfo.LastName,
                    RatingTrip = r.RatingTrip,
                    UserId = r.UserInfoId

                });

            }

            return trips.Select(t => mapper.Map<TripWithUserDTO>(t)).ToList();

        }

        public IEnumerable<TripDTO> GetRandomTrips(int count, List<TripDTO> trips)
        {
            var rnd = new Random();
            var shuffle = new List<TripDTO>(trips);

            for (var i = 2; i < shuffle.Count; ++i)
            {
                var temp = shuffle[i];
                var nextRandom = rnd.Next(i - 1);
                shuffle[i] = shuffle[nextRandom];
                shuffle[nextRandom] = temp;
            }

            var result = shuffle.GetRange(0, count);

            return result.Select(t => mapper.Map<TripDTO>(t)).ToList();
        }

        public override Expression<Func<Trip, bool>> GetFilter(TripFilter filter)
        {
            Expression<Func<Trip, bool>> result = e => true;

            if (!string.IsNullOrEmpty(filter?.Name))
            {
                result = CombineExpressions(result, e => e.Name == filter.Name);
            }

            if (filter.Id != null)
            {
                result = CombineExpressions(result, e => e.Id == filter.Id);
            }

            return result;
        }

        public bool IsUserCreator(ClaimsPrincipal caller, int tripId)
        {
            var userId = caller.Claims.Single(c => c.Type == "id").Value;
            var userRep = unitOfWork.GetRepository<UserInfo>();
            var user = userRep.Find(u => u.IdentityId == userId);
            var temp = Repository.Find(t => t.UserInfoId == user.Id && t.Id == tripId);

            if (temp != null || caller.IsInRole("Moderator") || caller.IsInRole("Admin"))
            {
                return true;
            }
            return false;
        }

        public override void Remove(int id)
        {
            var trip = Repository.Get(id);
            if (trip == null)
                throw new Exception($"Db does not contain trip with id {id}");
            var isCreator = IsUserCreator(_caller, trip.Id);
            if (!isCreator)
                throw new Exception($"{_caller.Claims.Single(c => c.Type == "id").Value} tried to delete trip {trip.Id}");
            Repository.Remove(trip);

            unitOfWork.Complete();
        }

        public override void Update(TripDTO dto)
        {
            var trip = Repository.Get((int)dto.Id);
            if (trip == null)
                throw new Exception($"Db does not contain trip with id {dto.Id}");
            var isCreator = IsUserCreator(_caller, trip.Id);
            if (!isCreator)
                throw new Exception($"{_caller.Claims.Single(c => c.Type == "id").Value} tried to delete trip {trip.Id}");
            trip = mapper.Map<Trip>(dto);
            Repository.Update(trip);

            unitOfWork.Complete();
        }

        public override void Add(TripDTO dto)
        {
            dto.RatingTrip = 0;
            var trip = mapper.Map<Trip>(dto);
            var userId = _caller.Claims.Single(c => c.Type == "id").Value;
            var creator = unitOfWork.GetRepository<UserInfo>().Find(u => u.IdentityId == userId);
            trip.UserInfo = creator;
            Repository.Add(trip);

            unitOfWork.Complete();
        }
    }
}
