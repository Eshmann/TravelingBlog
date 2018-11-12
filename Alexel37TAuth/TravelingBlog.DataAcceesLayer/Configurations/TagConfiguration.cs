using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.DataAcceesLayer.Configurations
{
    public class TagConfiguration : IEntityTypeConfiguration<Tag>
    {
        public void Configure(EntityTypeBuilder<Tag> builder)
        {
            builder.HasKey(t => t.Id).HasName("pk_constraint_tag");
            builder.Property(t => t.Id).HasColumnName("id");

            builder.Property(t => t.Name).IsRequired().HasColumnName("tagname").HasMaxLength(20);
            builder.HasAlternateKey(t => t.Name).HasName("uq_constraint_tag");
        }
    }
}
