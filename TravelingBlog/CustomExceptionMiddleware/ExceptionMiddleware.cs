using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using TravelingBlog.BusinessLogicLayer.Contracts;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.CustomExceptionMiddleware
{
    //public class ExceptionMiddleware
    //{
    //    private readonly RequestDelegate next;
    //    private readonly ILoggerManager logger;

    //    public ExceptionMiddleware(RequestDelegate next, ILoggerManager logger)
    //    {
    //        this.logger = logger;
    //        this.next = next;
    //    }

    //    public async Task InvokeAsync(HttpContext httpContext)
    //    {
    //        try
    //        {
    //            await next(httpContext);
    //        }
    //        catch (Exception ex)
    //        {
    //            logger.LogError($"Something went wrong: {ex}");
    //            await HandleExceptionAsync(httpContext, ex);
    //        }
    //    }

    //    private static Task HandleExceptionAsync(HttpContext context, Exception exception)
    //    {
    //        context.Response.ContentType = "application/json";
    //        context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

    //        return context.Response.WriteAsync(new ErrorDetails()
    //        {
    //            StatusCode = context.Response.StatusCode,
    //            Message = "Internal Server Error from the custom middleware."
    //        }.ToString());
    //    }
    //}
}
