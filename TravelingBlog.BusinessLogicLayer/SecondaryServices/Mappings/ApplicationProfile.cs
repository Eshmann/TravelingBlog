﻿using AutoMapper;
using System.Linq;
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

            CreateMap<Trip, TripWithPostBlogsDTO>()
                .ForMember(dest => dest.PostBlogs, opt => opt.ResolveUsing(src =>
                {
                    return src.PostBlogs
                        .Select(pb => new PostBlogDTO
                        {
                            Id = pb.Id,
                            Name = pb.Name,
                            Plot = pb.Plot,
                            TripId = pb.TripId
                        });
                }));

            CreateMap<PostBlogDTO, PostBlog>();

            CreateMap<PostBlog, PostBlogDTO>();

            CreateMap<ImageDTO, Image>();

            CreateMap<Image, ImageDTO>();

            CreateMap<Trip, TripWithUserDTO>();
            CreateMap<TripWithUserDTO, Trip>();

            CreateMap<Country, CountryDTO>();
            CreateMap<CountryDTO, Country>();
        }
    }
}
