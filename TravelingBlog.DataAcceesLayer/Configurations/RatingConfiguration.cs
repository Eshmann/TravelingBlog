using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.DataAcceesLayer.Configurations
{
    public class RatingConfiguration : IEntityTypeConfiguration<Rating>
    {
        public void Configure(EntityTypeBuilder<Rating> builder)
        {
            builder.HasKey(r => new { r.UserInfoId, r.TripId }).HasName("pk_constraint_rating");

            builder.Property(r => r.UserInfoId).HasColumnName("userinfoid");
            builder.Property(r => r.TripId).HasColumnName("tripid");

            builder.Property(r => r.RatingPostBlog).IsRequired(false).HasColumnName("ratingpostblog");

            builder.HasOne(r => r.UserInfo).WithMany(u => u.Ratings).HasForeignKey(r => r.UserInfoId)
                .HasConstraintName("fk_constraint_userinfoid_rating").OnDelete(DeleteBehavior.Restrict);
            builder.HasOne(r => r.Trip).WithMany(pb => pb.Ratings).HasForeignKey(r => r.TripId)
                .HasConstraintName("fk_constraint_tripid_rating").OnDelete(DeleteBehavior.Cascade);

        }
    }
}
