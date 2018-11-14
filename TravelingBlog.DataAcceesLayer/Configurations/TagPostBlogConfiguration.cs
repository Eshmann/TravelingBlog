using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.DataAcceesLayer.Configurations
{
    public class TagPostBlogConfiguration : IEntityTypeConfiguration<TagPostBlog>
    {
        public void Configure(EntityTypeBuilder<TagPostBlog> builder)
        {
            builder.HasKey(tpb => new { tpb.TagId, tpb.PostBlogId }).HasName("pk_constraint_tagpostblog");

            builder.Property(tpb => tpb.TagId).HasColumnName("tagid");
            builder.Property(tpb => tpb.PostBlogId).HasColumnName("postblogid");

            builder.HasOne(tpb => tpb.Tag).WithMany(t => t.TagPostBlogs).HasForeignKey(tpb => tpb.TagId)
                .HasConstraintName("fk_constraint_tagid_tagpostblog").OnDelete(DeleteBehavior.Cascade);
            builder.HasOne(tpb => tpb.PostBlog).WithMany(t => t.TagPostBlogs).HasForeignKey(tpb => tpb.PostBlogId)
                .HasConstraintName("fk_constraint_postblogid_tagpostblog").OnDelete(DeleteBehavior.Cascade);
        }
    }
}
