using AutoMapper;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.Models.ViewModels;
using TravelingBlog.Models.ViewModels.DTO;

namespace TravelingBlog.BusinessLogicLayer.SecondaryServices.Mappings
{
    public class ApplicationProfile : Profile
    {
        public ApplicationProfile()
        {
            CreateMap<RegistrationViewModel, AppUser>()
                .ForMember(au => au.UserName, map => map.MapFrom(vm => vm.Email));

            CreateMap<TripDTO, Trip>();

            CreateMap<Trip, TripDTO>();
        }
    }
}
