using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
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
        public TripService(IUnitOfWork unitOfWork, ILoggerManager logger, IMapper mapper)
            : base(unitOfWork, logger, mapper) { }

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


        public IEnumerable<TripDTO> GetTripsWithHighestRating(int count)
        {
            var tripsCount = Repository.GetAll().Count();

            count = (count < tripsCount) ? tripsCount : count;

            var result = Repository
                .GetAll()
                .OrderByDescending(t => t.RatingTrip)
                .Take(count)
                .ToList();

            return result.Select(t => mapper.Map<TripDTO>(t)).ToList();
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

        public IList<TripWithUserDTO> SearchTrips(Search searchQuery, out int total)
        {
            List<TripWithUserDTO> trips = new List<TripWithUserDTO>();
            var word = searchQuery.SearchQuery;
            var result = Repository
                .GetAll()
                .Where(x => x.Name.ToLower().Contains(word)
                            || x.Description.ToLower().Contains(word))
                .Include(i => i.UserInfo);

            total = result.Count();

            trips = result.Select(t => mapper.Map<TripWithUserDTO>(t)).ToList();

            var skip = trips
                .Skip(searchQuery.PageSize * (searchQuery.PageNumber - 1))
                .Take(searchQuery.PageSize)
                .ToList();

            return skip;
        }

        public IList<TripWithUserDTO> FilterTripsByCountry(Filter filter, out int total)
        {
            List<TripWithUserDTO> trips = new List<TripWithUserDTO>();
            var query = Repository
                .GetAll()
                .Where(i => i.CountryTrips.Any(x => x.Country.Id == filter.Id))
                .Include(a => a.UserInfo);

            total = query.Count();

            trips = query.Select(t => mapper.Map<TripWithUserDTO>(t)).ToList();

            var result = trips
                .Skip(filter.PageSize * (filter.PageNumber - 1))
                .Take(filter.PageSize)
                .ToList();

            return result;
        }


        protected override Expression<Func<Trip, bool>> GetFilter(TripFilter filter)
        {
            Expression<Func<Trip, bool>> result = t => true;

            if (filter.Name != null)
            {
                result = CombineExpressions(result, t => t.Name == filter.Name);
            }

            if (filter.Id != null)
            {
                result = CombineExpressions(result, t => t.Id == filter.Id);
            }

            return result;
        }
    }
}
