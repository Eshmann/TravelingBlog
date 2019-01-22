using System.ComponentModel.DataAnnotations.Schema;
using TravelingBlog.DataAcceesLayer.Contracts;

namespace TravelingBlog.DataAcceesLayer.Models.Entities
{
    [Table("UserImage")]
    public class UserImage : ICreatedByUser,IEntity
    {
        public int Id { get; set; }
        public string Path { get; set; }
        public int UserInfoId { get; set; }
        public UserInfo UserInfo { get; set; }
    }
}
