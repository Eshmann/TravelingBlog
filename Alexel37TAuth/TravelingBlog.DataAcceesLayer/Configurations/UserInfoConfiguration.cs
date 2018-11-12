using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.DataAcceesLayer.Configurations
{
    public class UserInfoConfiguration : IEntityTypeConfiguration<UserInfo>
    {
        public void Configure(EntityTypeBuilder<UserInfo> builder)
        {
            builder.HasKey(U => U.Id).HasName("pk_constraint_user");
            builder.Property(u => u.Id).HasColumnName("id");
           // builder.HasIndex(u => u.Phone).HasName("user_phone_unique").IsUnique();
            builder.Property(u => u.Phone).HasColumnName("phone").HasMaxLength(10);//builder.Property(u => u.Phone).IsRequired().HasColumnName("phone").HasMaxLength(10);
            builder.Property(u => u.FirstName).IsRequired(true).HasColumnName("firstname").HasMaxLength(50);
            builder.Property(u => u.LastName).IsRequired(true).HasColumnName("lastname").HasMaxLength(50);
            builder.Property(u => u.DateOfBirth).HasColumnName("dateofbirth").HasColumnType("date");

            builder.Property(u => u.CountryId).HasColumnName("country_id");
        }
    }
}
