using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using TravelingBlog.DataAcceesLayer.Contracts;
using TravelingBlog.DataAcceesLayer.Data;
using TravelingBlog.DataAcceesLayer.Repositories.Contracts;

namespace TravelingBlog.DataAcceesLayer.Repositories
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class, IEntity
    {
        private readonly ApplicationDbContext Context;

        public Repository(ApplicationDbContext context)
        {
            this.Context = context;
        }

        public TEntity Get(int id)
        {
            return Context.Set<TEntity>().Where(e => e.Id == id).SingleOrDefault();
        }
        public IQueryable<TEntity> Get(Expression<Func<TEntity, bool>> predicate)
        {
            return Context.Set<TEntity>().Where(predicate);
        }
        public IQueryable<TEntity> GetAll()
        {
            return Context.Set<TEntity>();
        }

        public IQueryable<TEntity> FindAll(Expression<Func<TEntity, bool>> predicate)
        {
            return Context.Set<TEntity>().Where(predicate);
        }

        public TEntity Find(Expression<Func<TEntity, bool>> predicate)
        {
            return Context.Set<TEntity>().SingleOrDefault(predicate);
        }

        public bool Contains(TEntity entity)
        {
            return Context.Set<TEntity>().Contains(entity);
        }

        #region CRUD operation
        public void Add(TEntity entity)
        {
            Context.Set<TEntity>().Add(entity);
        }

        public void AddRange(IEnumerable<TEntity> entities)
        {
            Context.Set<TEntity>().AddRange(entities);
        }

        public void Update(TEntity entity)
        {
            Context.Set<TEntity>().Update(entity);
        }

        public void UpdateRange(IEnumerable<TEntity> entities)
        {
            Context.Set<TEntity>().UpdateRange(entities);
        }

        public void Remove(TEntity entity)
        {
            Context.Set<TEntity>().Remove(entity);
        }

        public void RemoveRange(IEnumerable<TEntity> entities)
        {
            Context.Set<TEntity>().RemoveRange(entities);
        }
        #endregion
    }
}
