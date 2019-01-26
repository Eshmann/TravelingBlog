using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts;

namespace TravelingBlog.Controllers
{
    [Authorize]
    public abstract class BaseController<TDto, TFilter> : Controller
    {
        protected IService<TDto, TFilter> service;
        private ISettingsService settingsService;

        public BaseController(IService<TDto, TFilter> service)
        {
            this.service = service;
        }

        protected BaseController(ISettingsService settingsService)
        {
            this.settingsService = settingsService;
        }

        [AllowAnonymous]
        [HttpGet("{id}")]
        public virtual IActionResult Get(int id)
        {
            var value = service.Get(id);

            return Ok(value);
        }

        [AllowAnonymous]
        [HttpGet]
        public virtual IActionResult GetAll()
        {
            var collection = service.GetAll();

            return Ok(collection);
        }
        
        [HttpPost]
        public virtual IActionResult Post([FromBody]TDto dto)
        {
            service.Add(dto);
            return Ok();
        }
        
        [HttpPut]
        public virtual IActionResult Put([FromBody]TDto dto)
        {
            service.Update(dto);
            return Ok();
        }
        
        [HttpDelete("{id}")]
        public virtual IActionResult Delete(int id)
        {
            service.Remove(id);
            return Ok();
        }
        
    }
}
