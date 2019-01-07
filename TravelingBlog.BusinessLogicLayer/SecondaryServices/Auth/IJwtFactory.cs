using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace TravelingBlog.BusinessLogicLayer.SecondaryServices.Auth
{
    public interface IJwtFactory
    {
        Task<string> GenerateEncodedToken(string userName, ClaimsIdentity identity, IList<string> roles);
        ClaimsIdentity GenerateClaimsIdentity(string userName, string id);
    }
}
