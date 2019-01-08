using AutoMapper;
using System;
using System.Linq.Expressions;
using TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts;
using TravelingBlog.BusinessLogicLayer.SecondaryServices.LoggerService;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.DataAcceesLayer.Repositories.Contracts;
using TravelingBlog.Models.Filters;
using TravelingBlog.Models.ViewModels.DTO;

namespace TravelingBlog.BusinessLogicLayer.ModelsServices
{
    public class ImageService : Service<Image, ImageDTO, ImageFilter>, IImageService
    {
        public ImageService(IUnitOfWork unitOfWork, ILoggerManager logger, IMapper mapper)
            : base(unitOfWork, logger, mapper) { }


        public override Expression<Func<Image, bool>> GetFilter(ImageFilter filter)
        {
            Expression<Func<Image, bool>> result = i => true;

            if (filter.Id != null)
            {
                result = CombineExpressions(result, t => t.Id == filter.Id);
            }

            return result;
        }
    }
}
