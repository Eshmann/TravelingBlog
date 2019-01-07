using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts;
using TravelingBlog.BusinessLogicLayer.SecondaryServices.LoggerService;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.DataAcceesLayer.Repositories.Contracts;
using TravelingBlog.Models;
using TravelingBlog.Models.Filters;
using TravelingBlog.Models.ViewModels.DTO;

namespace TravelingBlog.BusinessLogicLayer.ModelsServices
{
    public class SearchService : Service<Trip, TripWithUserDTO, TripFilter>, ISearchService
    {
        public SearchService(IUnitOfWork unitOfWork, ILoggerManager logger, IMapper mapper)
            : base(unitOfWork, logger, mapper) { }


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

            foreach (var n in query)
            {
                trips.Add(new TripWithUserDTO
                {
                    Name = n.Name,
                    Description = n.Description,
                    Id = n.Id,
                    FirstName = n.UserInfo.FirstName,
                    LastName = n.UserInfo.LastName
                });
            }

            var result = trips
                .Skip(filter.PageSize * (filter.PageNumber - 1))
                .Take(filter.PageSize)
                .ToList();

            return result;
        }
        public override Expression<Func<Trip, bool>> GetFilter(TripFilter filter)
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
