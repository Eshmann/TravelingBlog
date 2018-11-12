using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.DataAcceesLayer.Configurations
{
    public class CountryConfiguration : IEntityTypeConfiguration<Country>
    {
        public void Configure(EntityTypeBuilder<Country> builder)
        {
            builder.HasKey(c => c.Id).HasName("pk_constraint_country");
            builder.Property(c => c.Id).HasColumnName("id");
            builder.HasAlternateKey(c => c.MobCode).HasName("uq_constraint_mobcode_country");
            builder.Property(c => c.MobCode).IsRequired().HasColumnName("mobilecode").HasMaxLength(5);
        }
    }
}
