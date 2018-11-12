using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.DataAcceesLayer.Configurations
{
    public class ImageConfiguration : IEntityTypeConfiguration<Image>
    {
        public void Configure(EntityTypeBuilder<Image> builder)
        {
            builder.HasKey(i => i.Id).HasName("pk_constraint_image");
            builder.Property(i => i.Id).HasColumnName("Id");

            builder.Property(i => i.Path).IsRequired().HasColumnName("Path");

            builder.HasOne(i => i.PostBlog).WithMany(p => p.Images).HasForeignKey(i => i.PostBlogId)
                .HasConstraintName("fk_constraint_postblogid_image").OnDelete(DeleteBehavior.Cascade);

        }
    }
}
