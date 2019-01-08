using System;
using System.Collections.Generic;
using System.Text;

namespace TravelingBlog.Models.AuthModels
{
    public class ReCaptcha
    {
        public string OpenKey { get; set; }
        public string SecretKey { get; set; }
    }
}
