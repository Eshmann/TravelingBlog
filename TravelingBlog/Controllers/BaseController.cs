using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using TravelingBlog.ActionFilters;
using TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts;

namespace TravelingBlog.Controllers
{
    [Authorize]
    public abstract class BaseController<TDto, TFilter> : Controller
    {
        protected IService<TDto, TFilter> service;

        public BaseController(IService<TDto, TFilter> service)
        {
            this.service = service;
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
        [ServiceFilter(typeof(ValidationFilterAttribute))]
        public virtual IActionResult Post([FromBody]TDto dto)
        {
            service.Add(dto);
            return CreatedAtRoute(this.Url, dto);
        }

        [HttpPut]
        [ServiceFilter(typeof(ValidationFilterAttribute))]
        public virtual IActionResult Put([FromBody]TDto dto)
        {
            service.Update(dto);
            return Ok();
        }

        [HttpDelete]
        [ServiceFilter(typeof(ValidationFilterAttribute))]
        public virtual IActionResult Delete([FromBody]TDto dto)
        {
            service.Remove(dto);
            return Ok();
        }

        [HttpPost]
        [ServiceFilter(typeof(ValidationFilterAttribute))]
        public virtual IActionResult PostRange([FromBody]IEnumerable<TDto> dtos)
        {
            service.AddRange(dtos);
            return CreatedAtRoute(this.Url, dtos);
        }

        [HttpPut]
        [ServiceFilter(typeof(ValidationFilterAttribute))]
        public virtual IActionResult PutRange([FromBody]IEnumerable<TDto> dtos)
        {
            service.UpdateRange(dtos);
            return Ok();
        }

        [HttpDelete]
        [ServiceFilter(typeof(ValidationFilterAttribute))]
        public virtual IActionResult DeleteRange([FromBody]IEnumerable<TDto> dtos)
        {
            service.RemoveRange(dtos);
            return Ok();
        }
    }
}
