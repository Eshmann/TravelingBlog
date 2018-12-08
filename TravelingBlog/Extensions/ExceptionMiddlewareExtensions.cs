using Microsoft.AspNetCore.Builder;
using TravelingBlog.BusinessLogicLayer.SecondaryServices.CustomExceptionMiddleware;

namespace TravelingBlog.Extensions
{
    public static class ExceptionMiddlewareExtensions
    {
        public static void ConfigureCustomExceptionMiddleware(this IApplicationBuilder app)
        {
            app.UseMiddleware<ExceptionMiddleware>();
        }
    }
}
