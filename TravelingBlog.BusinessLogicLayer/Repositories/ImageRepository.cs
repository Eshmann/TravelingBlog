using TravelingBlog.BusinessLogicLayer.Contracts.Repositories;
using TravelingBlog.DataAcceesLayer.Data;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.BusinessLogicLayer.Repositories
{
    class ImageRepository : Repository<Image>, IImageRepository
    {
        private readonly ApplicationDbContext _ctx;

        public ImageRepository(ApplicationDbContext applicationDbContext) : base(applicationDbContext)
        {
            _ctx = applicationDbContext;
        }
    }
}
