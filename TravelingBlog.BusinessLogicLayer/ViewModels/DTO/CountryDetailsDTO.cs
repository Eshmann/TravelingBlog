using System.Collections.Generic;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.BusinessLogicLayer.ViewModels.DTO
{
    public class CountryDetailsDTO
    {
        public string Name { get; set; }        
        public string MobCode { get; set; }

        public IEnumerable<UserInfoDTO> UserInfoes { get; set; }
        public IEnumerable<TripDTO> CountryTrips { get; set; }
        public IEnumerable<PostBlogDTO> CountryPostBlogs { get; set; }

        public CountryDetailsDTO(Country country)
        {
            this.Name = country.Name;
            this.MobCode = country.MobCode;
        }
    }
}