using AdventureDb.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AdventureDb.Configurations
{
    public class RatingConfiguration : IEntityTypeConfiguration<Rating>
    {
        public void Configure(EntityTypeBuilder<Rating> builder)
        {
            builder.HasKey(r => new { r.UserId, r.TripId }).HasName("pk_constraint_rating");

            builder.Property(r => r.UserId).HasColumnName("userid");
            builder.Property(r => r.TripId).HasColumnName("tripid");

            builder.Property(r => r.RatingPostBlog).IsRequired(false).HasColumnName("ratingpostblog");

            builder.HasOne(r => r.User).WithMany(u => u.Ratings).HasForeignKey(r => r.UserId)
                .HasConstraintName("fk_constraint_userid_rating").OnDelete(DeleteBehavior.Restrict);
            builder.HasOne(r => r.Trip).WithMany(pb => pb.Ratings).HasForeignKey(r => r.TripId)
                .HasConstraintName("fk_constraint_tripid_rating").OnDelete(DeleteBehavior.Cascade);

        }
    }
}
