using FluentValidation.Attributes;
using TravelingBlog.Models.Validations;

namespace TravelingBlog.Models.ViewModels
{
    [Validator(typeof(CredentialsViewModelValidator))]
    public class CredentialsViewModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}