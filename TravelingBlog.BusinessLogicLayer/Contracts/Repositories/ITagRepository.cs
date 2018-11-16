using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.BusinessLogicLayer.ViewModels.DTO;
using System.Collections.Generic;

namespace TravelingBlog.BusinessLogicLayer.Contracts.Repositories
{
    public interface ITagRepository : IRepository<Tag>
    {
        IEnumerable<Tag> GetAllTags();
        Tag GetTagById(int tagId);
    }
}
