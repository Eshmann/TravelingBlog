using FluentValidation.Attributes;
using TravelingBlog.BusinessLogicLayer.Services.Validations;

namespace TravelingBlog.BusinessLogicLayer.ViewModels
{
    [Validator(typeof(CredentialsViewModelValidator))]
    public class CredentialsViewModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
