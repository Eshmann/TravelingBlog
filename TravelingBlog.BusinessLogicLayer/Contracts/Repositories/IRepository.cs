using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace TravelingBlog.BusinessLogicLayer.Contracts.Repositories
{
    public interface IRepository<TEntity> where TEntity : class
    {
        IEnumerable<TEntity> Find(Expression<Func<TEntity, bool>> predicate);

        IEnumerable<TEntity> FindAll();

        TEntity SingleOrDefault(Expression<Func<TEntity, bool>> predicate);

        #region CRUD operation
        void Add(TEntity entity);

        void AddRange(IEnumerable<TEntity> entities);

        void Update(TEntity entity); 

        void UpdateRange(IEnumerable<TEntity> entities); 

        void Remove(TEntity entity);

        void RemoveRange(IEnumerable<TEntity> entities);
        #endregion
    }
}
