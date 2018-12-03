using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.DataAcceesLayer.Configurations
{
    public class CountryTripConfiguration : IEntityTypeConfiguration<CountryTrip>
    {
        public void Configure(EntityTypeBuilder<CountryTrip> builder)
        {
            builder.HasKey(ct => new { ct.CountryId, ct.TripId });

            builder.Property(ct => ct.CountryId).HasColumnName("countryid");
            builder.Property(ct => ct.TripId).HasColumnName("tripid");

            builder.HasOne(ct => ct.Country).WithMany(c => c.CountryTrips).HasForeignKey(ct => ct.CountryId)
                .HasConstraintName("fk_constraint_countryid_countrytrip").OnDelete(DeleteBehavior.Cascade);
            builder.HasOne(ct => ct.Trip).WithMany(t => t.CountryTrips).HasForeignKey(ct => ct.TripId)
                .HasConstraintName("fk_constraint_tripid_countrytrip").OnDelete(DeleteBehavior.Cascade);
        }
    }
}
