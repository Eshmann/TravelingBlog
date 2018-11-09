using AdventureDb.Models;
using System.Collections.Generic;

namespace AdventureDb.Core.Repositories
{
    public interface ITagRepository : IRepository<Tag>
    {
        Tag GetTagWithTrips(int id);
        Tag GetTagWithPostBlogs(int id);
    }
}
