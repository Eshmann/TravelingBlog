using System;
using TravelingBlog.DataAcceesLayer.Contracts;

namespace TravelingBlog.DataAcceesLayer.Repositories.Contracts
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<TEntity> GetRepository<TEntity>()
           where TEntity : class, IEntity;

        void Complete();
    }
}
