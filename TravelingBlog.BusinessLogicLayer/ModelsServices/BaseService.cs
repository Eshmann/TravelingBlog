using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts;
using TravelingBlog.DataAcceesLayer.Repositories.Contracts;

namespace TravelingBlog.BusinessLogicLayer.ModelsServices
{
    public abstract class Service<TEntity, TDto, TFilter> : IService<TDto, TFilter>
        where TEntity : class
        where TDto : class
    {
        protected readonly IUnitOfWork unitOfWork;
        protected readonly ILogger logger;

        protected Service(IUnitOfWork unitOfWork, ILogger logger)
        {
            this.unitOfWork = unitOfWork;
            this.logger = logger;
        }

        protected IRepository<TEntity> Repository => unitOfWork.GetRepository<TEntity>();

        public abstract IEnumerable<TDto> Find(TFilter filter);
        public abstract IEnumerable<TDto> FindAll();
        public abstract TDto SingleOrDefaultAsync(TFilter filter);

        public abstract void Add(TDto dto);
        public abstract void Remove(TDto dto);
        public abstract void Update(TDto dto);
        public abstract void AddRange(IEnumerable<TDto> dto);
        public abstract void RemoveRange(IEnumerable<TDto> dto);
        public abstract void UpdateRange(IEnumerable<TDto> dto);

        public abstract int Count(TFilter filter);

        public Expression<Func<TEntity, bool>> CombineExpressions(Expression<Func<TEntity, bool>> first, Expression<Func<TEntity, bool>> second)
        {
            ParameterExpression param = Expression.Parameter(typeof(TEntity), "x");
            BinaryExpression body = Expression.AndAlso(Expression.Invoke(first, param), Expression.Invoke(second, param));
            return Expression.Lambda<Func<TEntity, bool>>(body, param);
        }
    }
}
