using AutoMapper;
using System.Linq;
using TravelingBlog.BusinessLogicLayer.ViewModels.DTO;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.BusinessLogicLayer.ViewModels.Mappings
{
    public class ApplicationProfile : Profile
    {
        public ApplicationProfile()
        {
            CreateMap<RegistrationViewModel, AppUser>()
                .ForMember(au => au.UserName, map => map.MapFrom(vm => vm.Email));

            CreateMap<Trip, GetTripDTO>()
                .ForMember(dto => dto.Rating, map => map.MapFrom(t => t.Ratings.Select(r => r.RatingPostBlog == true).ToList().Count))
                .ForMember(dto => dto.Author, map => map.MapFrom(t => t.UserInfo.FirstName))
                .ForMember(dto => dto.Tags, map => map.MapFrom(t => t.TagTrips.Select(tt => tt.Tag).ToList()))
                .ForMember(dto => dto.Countries, map => map.MapFrom(t => t.CountryTrips.Select(ct => ct.Country).ToList()));
        }
    }
}
