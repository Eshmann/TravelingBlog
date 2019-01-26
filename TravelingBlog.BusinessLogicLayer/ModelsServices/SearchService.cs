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
    public class SearchService : ISearchService
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly ILoggerManager logger;
        private readonly IMapper mapper;

        public SearchService(IUnitOfWork unitOfWork, ILoggerManager logger, IMapper mapper)
        {
            this.unitOfWork = unitOfWork;
            this.logger = logger;
            this.mapper = mapper;
        }

        private IRepository<Trip> Repository => this.unitOfWork.GetRepository<Trip>();

        public IList<TripDTODa> SearchTrips(Search searchQuery, out int total)
        {
            var word = searchQuery.SearchQuery;
            var result = Repository
                .GetAll()
                .Where(x => x.Name.ToLower().Contains(word)
                            || x.Description.ToLower().Contains(word))
                .Include(c => c.Comments)
                .Include(t => t.UserInfo)
                .ThenInclude(u => u.Identity)
                .OrderBy(t => t.Name)
                .ThenBy(x => x.Description)
                .ToList();

            total = result.Count();

            var tripsDTO = new List<TripDTODa>();
            foreach (var t in result)
            {
                tripsDTO.Add(new TripDTODa
                {
                    Id = t.Id,
                    Name = t.Name,
                    IsDone = t.IsDone,
                    Description = t.Description,
                    CommentsNumber = t.Comments.Count,
                    RatingTrip = (double)t.RatingTrip,
                    User = new UserInfoDTO
                    {
                        Id = t.UserInfo.Id,
                        FirstName = t.UserInfo.FirstName,
                        LastName = t.UserInfo.LastName,
                        Phone = t.UserInfo.Phone,
                        PictureUrl = t.UserInfo.Identity.PictureUrl,
                        FacebookId = t.UserInfo.Identity.FacebookId
                    }
                });
            }

            var skip = tripsDTO
                .Skip(searchQuery.PageSize * (searchQuery.PageNumber - 1))
                .Take(searchQuery.PageSize)
                .ToList();

            return skip;
        }

        public IList<TripDTODa> FilterTripsByCountry(Filter filter, out int total)
        {
            List<TripDTODa> trips = new List<TripDTODa>();
            var query = Repository
                .GetAll()
                .Where(i => i.CountryTrips.Any(x => x.Country.Id == filter.Id))
                .Include(c => c.Comments)
                .Include(t => t.UserInfo)
                .ThenInclude(u => u.Identity)
                .OrderBy(t => t.Name)
                .ThenBy(x => x.Description)
                .ToList();

            total = query.Count();

            foreach (var t in query)
            {
                trips.Add(new TripDTODa
                {
                    Id = t.Id,
                    Name = t.Name,
                    IsDone = t.IsDone,
                    Description = t.Description,
                    CommentsNumber = t.Comments.Count,
                    RatingTrip = (double)t.RatingTrip,
                    User = new UserInfoDTO
                    {
                        Id = t.UserInfo.Id,
                        FirstName = t.UserInfo.FirstName,
                        LastName = t.UserInfo.LastName,
                        Phone = t.UserInfo.Phone,
                        PictureUrl = t.UserInfo.Identity.PictureUrl,
                        FacebookId = t.UserInfo.Identity.FacebookId
                    }
                });
            }

            var result = trips
                .Skip(filter.PageSize * (filter.PageNumber - 1))
                .Take(filter.PageSize)
                .ToList();

            return result;
        }
    }
}
