using AutoMapper;
using TravelingBlog.BusinessLogicLayer.ViewModels;
using TravelingBlog.BusinessLogicLayer.ViewModels.DTO;
using TravelingBlog.DataAcceesLayer.Models.Entities;

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
