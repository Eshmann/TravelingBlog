using System.Collections.Generic;

namespace TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts
{
    public interface IService<TDto, TFilter>
    {
        IEnumerable<TDto> Find(TFilter filter);
        IEnumerable<TDto> FindAll();
        TDto SingleOrDefaultAsync(TFilter filter);

        void Add(TDto dto);
        void Remove(TDto dto);
        void Update(TDto dto);
        void AddRange(IEnumerable<TDto> dto);
        void RemoveRange(IEnumerable<TDto> dto);
        void UpdateRange(IEnumerable<TDto> dto);

        int Count(TFilter filter);

    }
}
