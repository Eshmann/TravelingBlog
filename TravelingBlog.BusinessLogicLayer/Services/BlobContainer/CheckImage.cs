using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace TravelingBlog.BusinessLogicLayer.Services.BlobContainer
{
    public class CheckImage
    {
        static readonly string[] _supportedMimeTypes = { "image/png", "image/jpeg", "image/jpg" };
        public static bool ChekingImages(List<IFormFile> files)
        {
            bool message = false;
            for(int i = 0; i < files.Count; i++)
            {
                if (files.Count > 8)
                {
                    message = false;
                    break;
                }
                string ex = files[i].ContentType.ToString();
                for (int j = 0; j < _supportedMimeTypes.Length; j++)
                {
                    if(ex == _supportedMimeTypes[j])
                    {
                        message = true;
                        break;
                    }
                    message = false;
                }
            }
            return message;
        }
    }
}
