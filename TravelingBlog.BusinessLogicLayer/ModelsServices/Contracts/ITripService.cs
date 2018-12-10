using TravelingBlog.BusinessLogicLayer.Filters;
using TravelingBlog.BusinessLogicLayer.ViewModels.DTO;

namespace TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts
{
    public interface ITripService : IService<TripDTO, TripFilter>
    {
    }
}
