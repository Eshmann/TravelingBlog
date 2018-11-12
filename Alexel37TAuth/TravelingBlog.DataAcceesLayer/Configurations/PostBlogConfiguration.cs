using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.DataAcceesLayer.Configurations
{
    public class PostBlogConfiguration : IEntityTypeConfiguration<PostBlog>
    {
        public void Configure(EntityTypeBuilder<PostBlog> builder)
        {
            builder.HasKey(p => p.Id).HasName("pk_constraint_postblog");
            builder.Property(p => p.Id).HasColumnName("id");

            builder.Property(p => p.Name).IsRequired().HasColumnName("namepostblog").HasMaxLength(100);
            builder.Property(p => p.Plot).IsRequired().HasColumnName("plot");

            builder.Property(p => p.DateOfCreation).IsRequired().HasColumnType("datetime").
                HasColumnName("creationdate");
            builder.Property(p => p.TripId).HasColumnName("tripid");
            builder.HasOne(p => p.Trip).WithMany(p => p.PostBlogs).HasForeignKey(p => p.TripId)
                .HasConstraintName("fk_constraint_postblog").OnDelete(DeleteBehavior.Cascade);
        }
    }
}
