using AutoMapper;
using TravelingBlog.BusinessLogicLayer.ViewModels;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.BusinessLogicLayer.Services.Mappings
{
    public class ApplicationProfile : Profile
    {
        public ApplicationProfile()
        {
            CreateMap<RegistrationViewModel, AppUser>()
                .ForMember(au => au.UserName, map => map.MapFrom(vm => vm.Email));
        }
    }
}
