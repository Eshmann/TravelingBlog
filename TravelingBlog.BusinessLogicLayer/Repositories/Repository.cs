﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using TravelingBlog.BusinessLogicLayer.Contracts.Repositories;
using TravelingBlog.DataAcceesLayer.Data;

namespace TravelingBlog.BusinessLogicLayer.Repositories
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        public ApplicationDbContext ApplicationDbContext { get; }
        public DbSet<TEntity> Set { get; set; }

        public Repository(ApplicationDbContext applicationDbContext)
        {
            this.ApplicationDbContext = applicationDbContext;
            this.Set = ApplicationDbContext.Set<TEntity>();
        }

        public async Task<IEnumerable<TEntity>> FindAsync(Expression<Func<TEntity, bool>> predicate)
        {
            return await this.ApplicationDbContext.Set<TEntity>().Where(predicate).ToListAsync();
        }

        public async Task<IEnumerable<TEntity>> FindAllAsync()
        {
            return await this.ApplicationDbContext.Set<TEntity>().ToListAsync();
        }

        public async Task<TEntity> SingleOrDefaultAsync(System.Linq.Expressions.Expression<System.Func<TEntity, bool>> predicate)
        {
            return await ApplicationDbContext.Set<TEntity>().SingleOrDefaultAsync<TEntity>(predicate);
        }

        public IEnumerable<TEntity> Include(params Expression<Func<TEntity, object>>[] includes)
        {
            DbSet<TEntity> dbSet = ApplicationDbContext.Set<TEntity>();

            IEnumerable<TEntity> query = null;
            foreach (var include in includes)
            {
                query = dbSet.Include(include);
            }

            return query ?? dbSet;
        }

        #region CRUD operation
        public void Add(TEntity entity)
        {
            ApplicationDbContext.Set<TEntity>().Add(entity);
        }

        public void AddRange(IEnumerable<TEntity> entities)
        {
            ApplicationDbContext.Set<TEntity>().AddRange(entities);
        }

        public void Update(TEntity entity)
        {
            ApplicationDbContext.Set<TEntity>().Update(entity);
        }

        public void UpdateRange(IEnumerable<TEntity> entities)
        {
            ApplicationDbContext.Set<TEntity>().UpdateRange(entities);
        }

        public void Remove(TEntity entity)
        {
            ApplicationDbContext.Set<TEntity>().Remove(entity);
        }

        public void RemoveRange(IEnumerable<TEntity> entities)
        {
            ApplicationDbContext.Set<TEntity>().RemoveRange(entities);
        }
        #endregion
    }
}
