using System.Linq;
using TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts;
using TravelingBlog.BusinessLogicLayer.SecondaryServices.LoggerService;
using TravelingBlog.DataAcceesLayer.Contracts;
using TravelingBlog.DataAcceesLayer.Repositories.Contracts;

namespace TravelingBlog.BusinessLogicLayer.ModelsServices
{
    public abstract class CreatedByUserService<TEntity> : ICreatedByUserService
        where TEntity : class, IEntity, ICreatedByUser
    {
        protected readonly IUnitOfWork unitOfWork;
        protected readonly ILoggerManager logger;

        protected CreatedByUserService(IUnitOfWork unitOfWork, ILoggerManager logger)
        {
            this.unitOfWork = unitOfWork;
            this.logger = logger;
        }

        protected IRepository<TEntity> Repository => unitOfWork.GetRepository<TEntity>();

        public bool IsUserCreator(int creatorid, int entityId)
        {
            return Repository.GetAll().Any(e => e.UserInfoId == creatorid && e.Id == entityId);
        }
    }
}
