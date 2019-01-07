
using AutoMapper;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using TravelingBlog.DataAcceesLayer.Data;
using TravelingBlog.DataAcceesLayer.Models;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.DataAcceesLayer.Repositories.Contracts;
using TravelingBlog.Models.ViewModels;

namespace TravelingBlog.Helpers
{
    public class Seed
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly RoleManager<Role> _roleManager;
        private readonly IMapper _mapper;
        private readonly ApplicationDbContext _context;

        public Seed(UserManager<AppUser> userManager, RoleManager<Role> roleManager, IMapper mapper, ApplicationDbContext context)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _mapper = mapper;
            _context = context;
        }
        public void SeedUsers()
        {
            if (!_userManager.Users.Any())
            {
                var userData = System.IO.File.ReadAllText("UserSeedData.json");
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
                    _context.UserInfoes.Add(new UserInfo
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

                    _userManager.AddToRoleAsync(admin, "Admin").Wait();
                    _userManager.AddToRoleAsync(admin, "Moderator").Wait();
                    _context.UserInfoes.Add(new UserInfo
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
