using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts;
using TravelingBlog.BusinessLogicLayer.SecondaryServices.LoggerService;
using TravelingBlog.DataAcceesLayer.Contracts;
using TravelingBlog.DataAcceesLayer.Repositories.Contracts;

namespace TravelingBlog.BusinessLogicLayer.ModelsServices
{
    // TODO: Add validation (attribute).
    public abstract class Service<TEntity, TDto, TFilter> : IService<TDto, TFilter>
        where TEntity : class, IEntity
        where TDto : class
    {
        protected readonly IUnitOfWork unitOfWork;
        protected readonly ILoggerManager logger;
        protected readonly IMapper mapper;

        protected Service(IUnitOfWork unitOfWork, ILoggerManager logger, IMapper mapper)
        {
            this.unitOfWork = unitOfWork;
            this.logger = logger;
            this.mapper = mapper;
        }

        protected IRepository<TEntity> Repository => unitOfWork.GetRepository<TEntity>();
        
        public TDto Get(int id)
        {
            var entity = Repository.Get(id);

            return mapper.Map<TDto>(entity);
        }

        public IEnumerable<TDto> GetAll()
        {
            var entities = Repository.GetAll().ToList();

            return entities.Select(e => mapper.Map<TDto>(e));
        }

        public IEnumerable<TDto> Get(TFilter filter)
        {
            Expression<Func<TEntity, bool>> predicate = GetFilter(filter);
            var entities = Repository.FindAll(predicate).ToList();

            return entities.Select(e => mapper.Map<TDto>(e));
        }

        public abstract void Remove(int id);

        public abstract void Update(TDto dto);

        public abstract void Add(TDto dto);

        public int Count(TFilter filter)
        {
            Expression<Func<TEntity, bool>> predicate = GetFilter(filter);
            var entities = Repository.FindAll(predicate).ToList();

            return entities.Count();
        }     

        public Expression<Func<TEntity, bool>> CombineExpressions(Expression<Func<TEntity, bool>> first,
            Expression<Func<TEntity, bool>> second)
        {
            ParameterExpression param = Expression.Parameter(typeof(TEntity), "x");
            BinaryExpression body = Expression.AndAlso(Expression.Invoke(first, param), Expression.Invoke(second, param));
            return Expression.Lambda<Func<TEntity, bool>>(body, param);
        }

        public abstract Expression<Func<TEntity, bool>> GetFilter(TFilter filter);
    }
}
