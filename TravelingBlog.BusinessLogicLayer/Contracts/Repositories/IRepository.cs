﻿using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace TravelingBlog.BusinessLogicLayer.Contracts.Repositories
{
    public interface IRepository<TEntity> where TEntity : class
    {
        Task<IEnumerable<TEntity>> FindAsync(Expression<Func<TEntity, bool>> predicate);

        Task<IEnumerable<TEntity>> FindAllAsync();

        Task<TEntity> SingleOrDefaultAsync(Expression<Func<TEntity, bool>> predicate);

        IEnumerable<TEntity> Include(params Expression<Func<TEntity, object>>[] includes);

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
