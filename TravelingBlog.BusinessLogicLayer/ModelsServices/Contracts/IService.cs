using System.Collections.Generic;

namespace TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts
{
    public interface IService<TDto, TFilter>
    {
        TDto Get(int id);
        IEnumerable<TDto> GetAll();
        IEnumerable<TDto> FindAll(TFilter filter);
        TDto Find(TFilter filter);

        void Add(TDto dto);
        void Remove(TDto dto);
        void Update(TDto dto);
        void AddRange(IEnumerable<TDto> dto);
        void RemoveRange(IEnumerable<TDto> dto);
        void UpdateRange(IEnumerable<TDto> dto);

        int Count(TFilter filter);

    }
}
