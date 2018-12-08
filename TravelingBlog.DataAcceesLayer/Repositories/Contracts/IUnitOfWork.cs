using System;
using System.Threading.Tasks;

namespace TravelingBlog.DataAcceesLayer.Repositories.Contracts
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<TEntity> GetRepository<TEntity>()
           where TEntity : class;

        Task CompleteAsync();
    }
}
