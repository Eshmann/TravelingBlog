using TravelingBlog.BusinessLogicLayer.ResourseHelpers;

namespace TravelingBlog.BusinessLogicLayer.ResourceHelpers
{
    public class Filter : PagingModel
    {
        public int Id { get; set; }

        public string Name { get; set; }
    }
}
