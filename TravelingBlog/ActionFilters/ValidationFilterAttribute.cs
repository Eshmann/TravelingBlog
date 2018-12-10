using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using TravelingBlog.BusinessLogicLayer.SecondaryServices.LoggerService;

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
