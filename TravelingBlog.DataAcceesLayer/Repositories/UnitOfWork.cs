using System;
using System.Collections.Generic;
using TravelingBlog.DataAcceesLayer.Contracts;
using TravelingBlog.DataAcceesLayer.Data;
using TravelingBlog.DataAcceesLayer.Repositories.Contracts;

namespace TravelingBlog.DataAcceesLayer.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext Context;

        private Dictionary<Type, object> repositories;

        public UnitOfWork(ApplicationDbContext context)
        {
            this.Context = context;
        }

        public IRepository<TEntity> GetRepository<TEntity>() where TEntity : class, IEntity
        {
            if (repositories == null)
            {
                repositories = new Dictionary<Type, object>();
            }

            Type type = typeof(TEntity);

            if (!repositories.ContainsKey(type))
            {
                repositories[type] = new Repository<TEntity>(Context);
            }

            return (IRepository<TEntity>)repositories[type];
        }


        public void Complete()
        {
            this.Context.SaveChanges();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    Context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
