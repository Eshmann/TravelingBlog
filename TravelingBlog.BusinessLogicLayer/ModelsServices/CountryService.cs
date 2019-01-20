using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using AutoMapper;
using TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts;
using TravelingBlog.BusinessLogicLayer.SecondaryServices.LoggerService;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.DataAcceesLayer.Repositories.Contracts;
using TravelingBlog.Models.Filters;
using TravelingBlog.Models.ViewModels.DTO;

namespace TravelingBlog.BusinessLogicLayer.ModelsServices
{
    public class CountryService : Service<Country, CountryDTO, CountryFilter>, ICountryService
    {
        public CountryService(IUnitOfWork unitOfWork, ILoggerManager logger, IMapper mapper)
            : base(unitOfWork, logger, mapper) { }

        private IRepository<UserInfo> UserRepository => unitOfWork.GetRepository<UserInfo>();        

        public override Expression<Func<Country, bool>> GetFilter(CountryFilter filter)
        {
            Expression<Func<Country, bool>> result = t => true;

            if (filter.Name != null)
            {
                result = CombineExpressions(result, t => t.Name == filter.Name);
            }

            return result;
        }

        public override void Add(CountryDTO dto)
        {
            var entity = mapper.Map<Country>(dto);
            Repository.Add(entity);

            unitOfWork.Complete();
        }

        public override void Remove(int id)
        {
            var entity = Repository.Get(id);
            Repository.Remove(entity);

            unitOfWork.Complete();
        }

        public override void Update(CountryDTO dto)
        {
            var entity = Repository.Get(dto.Id);

            entity.MobCode = dto.MobCode;
            entity.Name = dto.Name;

            Repository.Update(entity);

            unitOfWork.Complete();
        }
    }
}
