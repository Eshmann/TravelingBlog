using AdventureDb.Models;
using System.Collections.Generic;


namespace AdventureDb.Core.Repositories
{
    public interface IPostBlogRepository: IRepository<PostBlog>
    {
        PostBlog GetPostBlogWithTags(int id);
        PostBlog GetPostBlogWithPurchases(int id);
        PostBlog GetPostBlogWithImages(int id);
        PostBlog GetPostBlogWithCountries(int id);
    }
}
