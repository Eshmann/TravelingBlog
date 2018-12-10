using System;
using System.Collections.Generic;
using System.Text;

namespace TravelingBlog.BusinessLogicLayer.ResourseHelpers
{
    public class PagingModel
    {
        public const int maxPageSize = 20;

        public int PageNumber { get; set; } = 1;

        public int _pageSize = 10;

        public int PageSize
        {
            get { return _pageSize; }
            set { _pageSize = (value > maxPageSize) ? maxPageSize : value; }
        }
    }
}
