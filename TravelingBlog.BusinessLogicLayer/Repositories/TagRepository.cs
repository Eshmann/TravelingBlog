using System;
using System.Linq;
using TravelingBlog.BusinessLogicLayer.Contracts.Repositories;
using Microsoft.EntityFrameworkCore;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using System.Collections.Generic;
using TravelingBlog.DataAcceesLayer.Data;

namespace TravelingBlog.BusinessLogicLayer.Repositories
{
    public class TagRepository : Repository<Tag>, ITagRepository
    {
        public TagRepository(ApplicationDbContext ApplicationDbContext) : base(ApplicationDbContext)
        {
        }

        public Tag GetTagById(int tagId)
        {
            return SingleOrDefault(c => c.Id.Equals(tagId));
        }

        public IEnumerable<Tag> GetAllTags()
        {
            return FindAll()
                .OrderBy(pb => pb.Name);
        }
    }
}
