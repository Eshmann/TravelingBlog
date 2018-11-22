using System;
using System.Linq;
using TravelingBlog.BusinessLogicLayer.Contracts.Repositories;
using Microsoft.EntityFrameworkCore;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using System.Collections.Generic;
using TravelingBlog.DataAcceesLayer.Data;
using System.Threading.Tasks;

namespace TravelingBlog.BusinessLogicLayer.Repositories
{
    public class TagRepository : Repository<Tag>, ITagRepository
    {
        public TagRepository(ApplicationDbContext ApplicationDbContext) : base(ApplicationDbContext)
        {
        }

        public async Task<Tag> GetTagByIdAsync(int tagId)
        {
            return await SingleOrDefaultAsync(c => c.Id.Equals(tagId));
        }

        public async Task<IEnumerable<Tag>> GetAllTagsAsync()
        {
            var tags = await FindAllAsync();
            return tags.OrderBy(pb => pb.Name);
        }
    }
}
