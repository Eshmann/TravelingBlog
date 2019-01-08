 using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts;
using TravelingBlog.DataAcceesLayer.Data;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.Models.ViewModels.DTO;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace TravelingBlog.BusinessLogicLayer.ModelsServices
{
    public class AdminService : IAdminService
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly ApplicationDbContext _context;
        public AdminService(ApplicationDbContext context, UserManager<AppUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        public async Task<List<UserWithRolesDTO>> GetUsersWithRoles()
        {
            var userList = await (from user in _context.UserInfos
                                  join app in _context.Users
                                  on user.IdentityId equals app.Id
                                  orderby app.UserName
                                  select new UserWithRolesDTO
                                  {
                                      Id = app.Id,
                                      UserName = app.UserName,
                                      Roles = (from approle in app.UserRoles
                                               join role in _context.Roles
                                               on approle.RoleId equals role.Id
                                               select role.Name)
                                  }).ToListAsync();
            return userList;
        }

        public async Task<IList<string>> EditUserRoles(string userName, RoleEditDto roleEditDTO)
        {
            var user = await _userManager.FindByNameAsync(userName);

            var userRoles = await _userManager.GetRolesAsync(user);

            var selectedRoles = roleEditDTO.RoleNames;

            selectedRoles = selectedRoles ?? new string[] { };

            var result = await _userManager.AddToRolesAsync(user, selectedRoles.Except(userRoles));
            if (!result.Succeeded)
            {
                throw new System.Exception("Failed to add to role");
            }

            result = await _userManager.RemoveFromRolesAsync(user, userRoles.Except(selectedRoles));
            if (!result.Succeeded)
            {
                throw new System.Exception("Failed to remove from role");
            }
            var res = await _userManager.GetRolesAsync(user);
            return res;
        }
    }
}
