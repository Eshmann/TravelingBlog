﻿using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using System;
using System.Net.Http;
using System.Threading.Tasks;
using TravelingBlog.BusinessLogicLayer.SecondaryServices.Auth;
using TravelingBlog.DataAcceesLayer.Models.Entities;
using TravelingBlog.DataAcceesLayer.Repositories.Contracts;
using TravelingBlog.Helpers;
using TravelingBlog.Models.AuthModels;
using TravelingBlog.Models.ViewModels;

namespace TravelingBlog.Controllers
{
    [Route("api/[controller]/[action]")]
    public class ExternalAuthController : Controller
    {
        private readonly IUnitOfWork unitOfWork;
        private readonly UserManager<AppUser> userManager;
        private readonly FacebookAuthSettings fbAuthSettings;
        private readonly IJwtFactory jwtFactory;
        private readonly JwtIssuerOptions jwtOptions;
        private static readonly HttpClient Client = new HttpClient();

        public ExternalAuthController(IOptions<FacebookAuthSettings> fbAuthSettingsAccessor, UserManager<AppUser> userManager, IUnitOfWork unitOfWork, IJwtFactory jwtFactory, IOptions<JwtIssuerOptions> jwtOptions)
        {
            fbAuthSettings = fbAuthSettingsAccessor.Value;
            this.userManager = userManager;
            this.unitOfWork = unitOfWork;
            this.jwtFactory = jwtFactory;
            this.jwtOptions = jwtOptions.Value;
        }

        // POST api/externalauth/facebook
        [HttpPost]
        public async Task<IActionResult> Facebook([FromBody]FacebookAuthViewModel model)
        {
            // 1.generate an app access token
            var appAccessTokenResponse = await Client.GetStringAsync($"https://graph.facebook.com/oauth/access_token?client_id={fbAuthSettings.AppId}&client_secret={fbAuthSettings.AppSecret}&grant_type=client_credentials");
            var appAccessToken = JsonConvert.DeserializeObject<FacebookAppAccessToken>(appAccessTokenResponse);
            // 2. validate the user access token
            var userAccessTokenValidationResponse = await Client.GetStringAsync($"https://graph.facebook.com/debug_token?input_token={model.AccessToken}&access_token={appAccessToken.AccessToken}");
            var userAccessTokenValidation = JsonConvert.DeserializeObject<FacebookUserAccessTokenValidation>(userAccessTokenValidationResponse);

            if (!userAccessTokenValidation.Data.IsValid)
            {
                return BadRequest(Errors.AddErrorToModelState("login_failure", "Invalid facebook token.", ModelState));
            }

            // 3. we've got a valid token so we can request user data from fb
            var userInfoResponse = await Client.GetStringAsync($"https://graph.facebook.com/v2.8/me?fields=id,email,first_name,last_name,name,gender,locale,birthday,picture&access_token={model.AccessToken}");
            var userInfo = JsonConvert.DeserializeObject<FacebookUserData>(userInfoResponse);

            // 4. ready to create the local user account (if necessary) and jwt
            var user = await userManager.FindByEmailAsync(userInfo.Email);

            if (user == null)
            {
                var appUser = new AppUser
                {
                    FacebookId = userInfo.Id,
                    Email = userInfo.Email,
                    UserName = userInfo.Email,
                    PictureUrl = userInfo.Picture.Data.Url
                };

                var result = await userManager.CreateAsync(appUser, Convert.ToBase64String(Guid.NewGuid().ToByteArray()).Substring(0, 8));

                if (!result.Succeeded) return new BadRequestObjectResult(Errors.AddErrorsToModelState(result, ModelState));

                appUser = await userManager.FindByNameAsync(appUser.UserName);
                await userManager.AddToRoleAsync(appUser, "Member");


                unitOfWork.GetRepository<UserInfo>().Add(new UserInfo { IdentityId = appUser.Id, FirstName = userInfo.FirstName, LastName = userInfo.LastName });
                unitOfWork.Complete();
            }

            // generate the jwt for the local user...
            var localUser = await userManager.FindByNameAsync(userInfo.Email);

            if (localUser == null)
            {
                return BadRequest(Errors.AddErrorToModelState("login_failure", "Failed to create local user account.", ModelState));
            }

            var roles = await userManager.GetRolesAsync(localUser);
            var jwt = await Tokens.GenerateJwt(jwtFactory.GenerateClaimsIdentity(localUser.UserName, localUser.Id),
                                               jwtFactory, localUser.UserName, jwtOptions, 
                                               new JsonSerializerSettings { Formatting = Formatting.Indented }, roles);

            return new OkObjectResult(jwt);
        }
    }
}