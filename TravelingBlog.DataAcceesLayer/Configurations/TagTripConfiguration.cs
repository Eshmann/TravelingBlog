using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.DataAcceesLayer.Configurations
{
    public class TagTripConfiguration : IEntityTypeConfiguration<TagTrip>
    {
        public void Configure(EntityTypeBuilder<TagTrip> builder)
        {
            builder.HasKey(tp => new { tp.TagId, tp.TripId }).HasName("pk_constraint_tagtrip");

            builder.Property(tp => tp.TagId).HasColumnName("tagid");
            builder.Property(tp => tp.TripId).HasColumnName("tripid");

            builder.HasOne(tp => tp.Tag).WithMany(t => t.TagTrips).HasForeignKey(tp => tp.TagId)
                .HasConstraintName("fk_constraint_tagid_tagtrip").OnDelete(DeleteBehavior.Cascade);
            builder.HasOne(tp => tp.Post).WithMany(t => t.TagTrips).HasForeignKey(tp => tp.TripId)
                .HasConstraintName("fk_constraint_tripid_tagtrip").OnDelete(DeleteBehavior.Cascade);
        }
    }
}
