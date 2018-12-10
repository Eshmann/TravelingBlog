using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using TravelingBlog.DataAcceesLayer.Contracts;

namespace TravelingBlog.DataAcceesLayer.Repositories.Contracts
{
    public interface IRepository<TEntity> where TEntity : class, IEntity
    {
        TEntity Get(int id);

        IQueryable<TEntity> GetAll();

        IQueryable<TEntity> FindAll(Expression<Func<TEntity, bool>> predicate);

        TEntity Find(Expression<Func<TEntity, bool>> predicate);

        bool Contains(TEntity entity);

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
