using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelingBlog.BusinessLogicLayer.Contracts;
using TravelingBlog.DataAcceesLayer.Contracts;

namespace TravelingBlog.ActionFilters
{
    public class ValidationFilterAttribute : IActionFilter
    { 
        private readonly ILoggerManager logger;

        public ValidationFilterAttribute(ILoggerManager logger)
        {
            this.logger = logger;
        }

        public void OnActionExecuting(ActionExecutingContext context)
        {
            var param = context.ActionArguments.SingleOrDefault(p => p.Value is IEntity);
            if (param.Value == null)
            {
                logger.LogError("Object is null");
                context.Result = new BadRequestObjectResult("Object is null");
                return;
            }

            if (!context.ModelState.IsValid)
            {
                logger.LogError("Object is invalid");
                context.Result = new BadRequestObjectResult(context.ModelState);
            }
        }

        public void OnActionExecuted(ActionExecutedContext context)
        {

        }
    }
}
