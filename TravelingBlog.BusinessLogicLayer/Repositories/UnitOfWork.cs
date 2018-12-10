using System;
using TravelingBlog.BusinessLogicLayer.Contracts.Repositories;
using TravelingBlog.BusinessLogicLayer.Contracts;
using TravelingBlog.DataAcceesLayer.Data;
using System.Threading.Tasks;

namespace TravelingBlog.BusinessLogicLayer.Repositories
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationDbContext ApplicationDbContext;

        private IUserRepository users;
        private ITripRepository trips;
        private IPostBlogRepository postBlogs;
        private ICountryRepository countries;
        private ITagRepository tags;
        private IImageRepository images;
        

        public UnitOfWork(ApplicationDbContext ApplicationDbContext)
        {
            this.ApplicationDbContext = ApplicationDbContext;
        }

        public IUserRepository Users
        {
            get
            {
                if (this.users == null)
                {
                    this.users = new UserRepository(ApplicationDbContext);
                }
                return users;
            }
        }
        public IImageRepository Images
        {
            get
            {
                if (this.images == null)
                {
                    this.images = new ImageRepository(ApplicationDbContext);
                }
                return images;
            }
        }

        public ITripRepository Trips
        {
            get
            {
                if (this.trips == null)
                {
                    this.trips = new TripRepository(ApplicationDbContext);
                }
                return trips;
            }
        }

        public IPostBlogRepository PostBlogs
        {
            get
            {
                if (this.postBlogs == null)
                {
                    this.postBlogs = new PostBlogRepository(ApplicationDbContext);
                }
                return postBlogs;
            }
        }

        public ICountryRepository Countries
        {
            get
            {
                if (this.countries == null)
                {
                    this.countries = new CountryRepository(ApplicationDbContext);
                }
                return countries;
            }
        }

        public ITagRepository Tags
        {
            get
            {
                if (this.tags == null)
                {
                    this.tags = new TagRepository(ApplicationDbContext);
                }
                return tags;
            }
        }

        public async Task CompleteAsync()
        {
            await this.ApplicationDbContext.SaveChangesAsync();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    ApplicationDbContext.Dispose();
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
