using AdventureDb.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AdventureDb.Configurations
{
    public class RoleConfiguration : IEntityTypeConfiguration<Role>
    {
        public void Configure(EntityTypeBuilder<Role> builder)
        {
            builder.HasKey(r => r.Id).HasName("pk_constraint_role");
            builder.Property(r => r.Id).HasColumnName("id");
            builder.Property(r => r.Name).IsRequired().HasColumnName("rolename").HasDefaultValue("User");
        }
    }
}
