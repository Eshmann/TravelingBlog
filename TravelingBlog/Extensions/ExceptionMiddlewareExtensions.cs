using Microsoft.AspNetCore.Builder;
using TravelingBlog.CustomExceptionMiddleware;

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
