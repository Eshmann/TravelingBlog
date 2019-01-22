using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace TravelingBlog.Models.ViewModels.DTO
{
    public class UserPhotoDTO
    {
        public string Id { get; set; }
        public IList<IFormFile> formFile { get; set; }
    }
}
