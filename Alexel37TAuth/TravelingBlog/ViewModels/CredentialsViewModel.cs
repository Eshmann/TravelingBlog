using TravelingBlog.ViewModels.Validations;
using FluentValidation.Attributes;

namespace TravelingBlog.ViewModels
{
    [Validator(typeof(CredentialsViewModelValidator))]
    public class CredentialsViewModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
