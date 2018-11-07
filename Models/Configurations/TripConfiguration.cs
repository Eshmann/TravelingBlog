using AdventureDb.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AdventureDb.Configurations
{
    public class TripConfiguration : IEntityTypeConfiguration<Trip>
    {
        public void Configure(EntityTypeBuilder<Trip> builder)
        {
            builder.HasKey(p => p.Id).HasName("pk_constraint_trip");
            builder.Property(p => p.Id).HasColumnName("id");
            builder.HasAlternateKey(p => p.Name).HasName("uq_constraint_trip");
            builder.Property(p => p.Name).HasColumnName("postname");
            builder.Property(p => p.IsDone).IsRequired().HasColumnName("isDone");
            builder.HasOne(p => p.User).WithMany(u => u.Trips).HasForeignKey(p => p.UserId).
                OnDelete(DeleteBehavior.Cascade).
                HasConstraintName("fk_userid_trip");
        }
    }
}
