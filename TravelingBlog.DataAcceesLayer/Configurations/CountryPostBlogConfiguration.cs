using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.DataAcceesLayer.Configurations
{
    public class CountryPostBlogConfiguration : IEntityTypeConfiguration<CountryPostBlog>
    {
        public void Configure(EntityTypeBuilder<CountryPostBlog> builder)
        {
            builder.HasKey(ct => new { ct.CountryId, ct.PostBlogId });

            builder.Property(ct => ct.CountryId).HasColumnName("countryid");
            builder.Property(ct => ct.PostBlogId).HasColumnName("tripid");

            builder.HasOne(ct => ct.Country).WithMany(c => c.CountryPostBlogs).HasForeignKey(ct => ct.CountryId)
                .HasConstraintName("fk_constraint_countryid_countrypostblog").OnDelete(DeleteBehavior.Cascade);
            builder.HasOne(ct => ct.PostBlog).WithMany(c => c.CountryPostBlogs).HasForeignKey(ct => ct.PostBlogId)
                .HasConstraintName("fk_constraint_postblogid_countrypostblog").OnDelete(DeleteBehavior.Cascade);
        }
    }
}
