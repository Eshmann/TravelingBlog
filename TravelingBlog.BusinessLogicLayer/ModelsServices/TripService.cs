using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts;
using TravelingBlog.BusinessLogicLayer.SecondaryServices.LoggerService;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.DataAcceesLayer.Repositories.Contracts;
using TravelingBlog.Models.Filters;
using TravelingBlog.Models.ViewModels.DTO;

namespace TravelingBlog.BusinessLogicLayer.ModelsServices
{
    public class TripService : Service<Trip, TripDTO, TripFilter>, ITripService
    {
        public TripService(IUnitOfWork unitOfWork, ILoggerManager logger, IMapper mapper)
            : base(unitOfWork, logger, mapper) { }

        public IEnumerable<TripDTO> GetTripWithPostBlogs(TripFilter filter)
        {
            Func<Trip, bool> predicate = GetFilter(filter);
            var entities = Repository
              .FindAll(t => predicate(t)) // "Find" does not work with "Include".
              .Include(t => t.PostBlogs);

            return entities.Select(t => mapper.Map<TripDTO>(t));
        }

        protected override Func<Trip, bool> GetFilter(TripFilter filter)
        {
            Func<Trip, bool> result = t => true;
            if (!String.IsNullOrEmpty(filter?.Name))
            {
                result += t => t.Name == filter.Name;
            }
            return result;
        }
    }
}
