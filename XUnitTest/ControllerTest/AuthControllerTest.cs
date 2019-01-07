using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Moq;
using TravelingBlog.BusinessLogicLayer.SecondaryServices.Auth;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.Models.AuthModels;

namespace XUnitTest.ControllerTest
{
    public class AuthControllerTest
    {
        private readonly Mock<UserManager<AppUser>> userManager;
        private readonly Mock<IJwtFactory> jwtFactory;
        private readonly Mock<IOptions<JwtIssuerOptions>> jwtOptions;
        public AuthControllerTest()
        {
          userManager = new Mock<UserManager<AppUser>>();
          jwtFactory = new Mock<IJwtFactory>();
          jwtOptions = new Mock<IOptions<JwtIssuerOptions>>();
        }

        //[Fact]
        //public void TryingToLoginOrDie()
        //{
        //    // Arrange
        //    var login = new CredentialsViewModel
        //    {
        //        UserName = "sashadanilenko@mail.ua",
        //        Password = "qwe123"
        //    };
        //    AuthController controller = new AuthController(userManager.Object, jwtFactory.Object, jwtOptions.Object);
        //    //Act
        //    var result = controller.Post(login);

        //    //Assert

        //    Assert.IsType<OkObjectResult>(result);
        //}
    }
}
