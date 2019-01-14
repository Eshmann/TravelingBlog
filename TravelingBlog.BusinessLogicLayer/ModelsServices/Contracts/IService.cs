using System.Collections.Generic;

namespace TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts
{
    public interface IService<TDto, TFilter>
    {
        TDto Get(int id);
        IEnumerable<TDto> GetAll();
        IEnumerable<TDto> Get(TFilter filter);

        void Add(TDto dto);
        void Remove(int id);
        void Update(TDto dto);

        int Count(TFilter filter);
    }
}
