using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.DataAcceesLayer.Configurations
{
    public class CommentConfiguration : IEntityTypeConfiguration<Comment>
    {
        public void Configure(EntityTypeBuilder<Comment> builder)
        {
            builder.HasKey(c => new { c.UserInfoId, c.TripId }).HasName("pk_constraint_comment");

            builder.Property(c => c.UserInfoId).HasColumnName("userinfoid");
            builder.Property(c => c.TripId).HasColumnName("TripId");

            builder.HasOne(c => c.UserInfo).WithMany(u => u.Comments).HasForeignKey(c => c.UserInfoId)
                .HasConstraintName("fk_constraint_userinfoid_comment").OnDelete(DeleteBehavior.Restrict);
            builder.HasOne(c => c.Trip).WithMany(p => p.Comments).HasForeignKey(c => c.TripId)
                .HasConstraintName("fk_constraint_TripId_comment").OnDelete(DeleteBehavior.Cascade);
            builder.Property(b => b.Content).IsRequired().HasColumnName("Content");
        }
    }
}
