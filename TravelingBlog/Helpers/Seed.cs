using System.Linq;
using Microsoft.AspNetCore.Identity;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using Newtonsoft.Json;
using TravelingBlog.BusinessLogicLayer.ViewModels;
using System.Collections.Generic;
using AutoMapper;
using TravelingBlog.BusinessLogicLayer.Contracts;

namespace TravelingBlog.Helpers
{
    public class Seed
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly RoleManager<Role> _roleManager;
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _unitOfWork;

        public Seed(UserManager<AppUser> userManager, RoleManager<Role> roleManager, IMapper mapper, IUnitOfWork unit)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _mapper = mapper;
            _unitOfWork = unit;
        }
        public void SeedUsers()
        {
            if(!_userManager.Users.Any())
            {
                var userData = System.IO.File.ReadAllText(@"Helpers\UserSeedData.json");
                var deserializeObjects = JsonConvert.DeserializeObject<List<RegistrationViewModel>>(userData);

                var list = new List<AppUser>();
                foreach (var item in deserializeObjects)
                {
                    list.Add(_mapper.Map<AppUser>(item));
                }

                var roles = new List<Role>
                {
                    new Role{ Name = "Admin"},
                    new Role{ Name = "Moderator"},
                    new Role{ Name = "Member" }
                };

                foreach (var item in roles)
                {
                    _roleManager.CreateAsync(item).Wait();
                }

                for (int i = 0; i < list.Count; i++)
                {
                    _userManager.CreateAsync(list[i], deserializeObjects[i].Password).Wait();
                    _userManager.AddToRoleAsync(list[i], "Moderator").Wait();
                    _unitOfWork.Users.Add(new UserInfo
                    {
                        IdentityId = list[i].Id,
                        FirstName = deserializeObjects[i].FirstName,
                        LastName = deserializeObjects[i].LastName
                    });
                }

                var admin = new AppUser
                {
                    UserName = "Admin"
                };

                IdentityResult result = _userManager.CreateAsync(admin, "password").Result;

                if (result.Succeeded)
                {
                    admin = _userManager.FindByNameAsync("Admin").Result;

                    _userManager.AddToRoleAsync(admin,"Admin").Wait();
                    _userManager.AddToRoleAsync(admin, "Moderator").Wait();
                    _unitOfWork.Users.Add(new UserInfo
                    {
                        IdentityId = admin.Id,
                        FirstName = "Admin",
                        LastName = "Admin"
                    });
                }
            }
        }
    }
}
