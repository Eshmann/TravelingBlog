using AutoMapper;
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

            CreateMap<Country, CountryDTO>()
                .ReverseMap();

            CreateMap<PostBlog, PostBlogDTO>()
                .ReverseMap();

            CreateMap<Tag, TagDTO>()
                .ReverseMap();

            CreateMap<Trip, TripDTO>()
                .ReverseMap();

            CreateMap<UserInfo, UserInfoDTO>()
                .ReverseMap();
        }
    }
}
