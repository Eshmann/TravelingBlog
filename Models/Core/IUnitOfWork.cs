using System;
using System.Collections.Generic;
using System.Text;
using AdventureDb.Core.Repositories;

namespace AdventureDb.Core
{
    public interface IUnitOfWork : IDisposable
    {
        IUserRepository Users { get; }
        ITripRepository Trips { get; }
        IPostBlogRepository PostBlogs { get; }
        ICountryRepository Countries { get; }
        ITagRepository Tags { get; }
        IRoleRepository Roles { get; }
        int Complete();
    }
}
