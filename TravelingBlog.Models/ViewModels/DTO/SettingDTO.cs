using Microsoft.AspNetCore.Http;
using System.Collections.Generic;

namespace TravelingBlog.Models.ViewModels.DTO
{
    public class SettingDTO
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public IList<IFormFile> formFile { get; set; }
        public string PhotoUser { get; set; }
    }
}
