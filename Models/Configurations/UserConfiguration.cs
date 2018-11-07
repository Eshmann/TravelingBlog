using AdventureDb.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AdventureDb.Configurations
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasKey(U => U.Id).HasName("pk_constraint_user");
            builder.Property(u => u.Id).HasColumnName("id");
            builder.HasIndex(u => u.Email).HasName("user_email_unique").IsUnique();
            builder.HasIndex(u => u.Phone).HasName("user_phone_unique").IsUnique();
            builder.Property(u => u.Email).IsRequired().HasColumnName("email").HasMaxLength(40);
            builder.Property(u => u.Phone).IsRequired().HasColumnName("phone").HasMaxLength(10);
            builder.Property(u => u.FirstName).IsRequired(true).HasColumnName("firstname").HasMaxLength(50);
            builder.Property(u => u.LastName).IsRequired(true).HasColumnName("lastname").HasMaxLength(50);
            builder.Property(u => u.DateOfBirth).HasColumnName("dateofbirth").HasColumnType("date");
            builder.HasOne(u => u.Country).WithMany(u => u.Users).HasForeignKey(u => u.CountryId).
                OnDelete(DeleteBehavior.SetNull).HasConstraintName("fk_constraint_country_user");
            builder.HasOne(u => u.Role).WithMany(r => r.Users).HasForeignKey(u => u.RoleId).
                HasConstraintName("fk_constraint_role_user").OnDelete(DeleteBehavior.Cascade);
            builder.Property(u => u.CountryId).HasColumnName("country_id");
            builder.Property(u => u.RoleId).HasColumnName("role_id");
        }
    }
}
