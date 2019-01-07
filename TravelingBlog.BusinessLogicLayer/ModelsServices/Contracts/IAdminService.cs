using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TravelingBlog.Models.ViewModels.DTO;

namespace TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts
{
    public interface IAdminService
    { 
        Task<List<UserWithRolesDTO>> GetUsersWithRoles();
        Task<IList<string>> EditUserRoles(string username,RoleEditDto roleEditDto);
    }
}
