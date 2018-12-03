using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.DataAcceesLayer.Configurations
{
    public class UserImageConfiguration : IEntityTypeConfiguration<UserImage>
    {
        public void Configure(EntityTypeBuilder<UserImage> builder)
        {
            builder.HasKey(i => i.Id).HasName("pk_constraint_userimage");

            builder.Property(i => i.Path).HasColumnName("Path");
            builder.Property(i => i.UserInfoId).HasColumnName("userinfoid").IsRequired();
        }
    }
}
