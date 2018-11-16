using TravelingBlog.BusinessLogicLayer.Contracts.Repositories;
using System.Linq;
using System.Collections.Generic;
using TravelingBlog.DataAcceesLayer.Data;

namespace TravelingBlog.BusinessLogicLayer.Repositories
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : class
    {
        public ApplicationDbContext ApplicationDbContext { get; }

        public Repository(ApplicationDbContext applicationDbContext)
        {
            this.ApplicationDbContext = applicationDbContext;
        }

        public void Add(TEntity entity)
        {
            ApplicationDbContext.Set<TEntity>().Add(entity);
        }

        public void AddRange(IEnumerable<TEntity> entities)
        {
            ApplicationDbContext.Set<TEntity>().AddRange(entities);
        }

        public IEnumerable<TEntity> Find(System.Linq.Expressions.Expression<System.Func<TEntity, bool>> predicate)
        {
            return ApplicationDbContext.Set<TEntity>().Where(predicate);
        }

        public IEnumerable<TEntity> FindAll()
        {
            return this.ApplicationDbContext.Set<TEntity>();
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

        public TEntity SingleOrDefault(System.Linq.Expressions.Expression<System.Func<TEntity, bool>> predicate)
        {
            return ApplicationDbContext.Set<TEntity>().SingleOrDefault<TEntity>(predicate);
        }
    }
}
