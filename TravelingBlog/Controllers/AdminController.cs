using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts;
using TravelingBlog.Models.ViewModels.DTO;

namespace TravelingBlog.Controllers
{
    [Route("api/[controller]")]
    public class AdminController : Controller
    {
        private readonly IAdminService _adminService;
        public AdminController(IAdminService service)
        {
            _adminService = service;
        }

        [Authorize(Policy = "RequireAdminRole")]
        [HttpGet("usersWithRoles")]
        public async Task<IActionResult> GetUsersWithRoles()
        {
            var userList = await _adminService.GetUsersWithRoles();

            return Ok(userList);
        }

        [Authorize(Policy = "RequireAdminRole")]
        [HttpPost("editUserRoles/{userName}")]
        public async Task<IActionResult> EditUserRoles(string userName, [FromBody]RoleEditDto roleEditDto)
        {
            var res = await _adminService.EditUserRoles(userName, roleEditDto);

            return Ok(res);
        }
    }
}
