using System;
using System.Collections.Generic;
using System.Text;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.Models.Filters;
using TravelingBlog.Models.ViewModels.DTO;

namespace TravelingBlog.BusinessLogicLayer.ModelsServices.Contracts
{
    public interface ICountryService : IService<CountryDTO, CountryFilter>
    {

    }
}
