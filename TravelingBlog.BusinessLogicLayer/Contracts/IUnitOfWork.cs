using System;
using System.Threading.Tasks;
using TravelingBlog.BusinessLogicLayer.Contracts.Repositories;

namespace TravelingBlog.BusinessLogicLayer.Contracts
{
    public interface IUnitOfWork : IDisposable
    {
        IUserRepository Users { get; }
        ITripRepository Trips { get; }
        IPostBlogRepository PostBlogs { get; }
        ICountryRepository Countries { get; }
        ITagRepository Tags { get; }
        IImageRepository Images { get; }

        Task CompleteAsync();
    }
}
