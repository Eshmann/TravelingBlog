using AdventureDb.Core;
using AdventureDb.Core.Repositories;
using AdventureDb.Persistence.Repositories;

namespace AdventureDb.Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        public AdventureBlogContext context;
        public IUserRepository Users { get ;private set; }
        public ITripRepository Trips { get ;private set ; }
        public IPostBlogRepository PostBlogs { get ;private set; }
        public ICountryRepository Countries { get;private set ; }
        public ITagRepository Tags { get;private set; }
        public IRoleRepository Roles { get ;private set; }
        public UnitOfWork(AdventureBlogContext blogContext)
        {
            context = blogContext;
            Users = new UserRepository(context);
            Trips = new TripRepository(context);
            Tags = new TagRepository(context);
            Roles = new RoleRepository(context);
            PostBlogs = new PostBlogRepository(context);
            Countries = new CountryRepository(context);
        }
        public int Complete()
        {
            return context.SaveChanges();
        }

        public void Dispose()
        {
            context.Dispose();
        }
    }
}
