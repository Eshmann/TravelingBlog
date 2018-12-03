using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.DataAcceesLayer.Configurations
{
    public class TripConfiguration : IEntityTypeConfiguration<Trip>
    {
        public void Configure(EntityTypeBuilder<Trip> builder)
        {
            builder.HasKey(p => p.Id).HasName("pk_constraint_trip");
            builder.Property(p => p.Id).HasColumnName("id");
            //builder.HasAlternateKey(p => p.Name).HasName("uq_constraint_trip");
            builder.Property(p => p.Name).HasColumnName("postname");
            builder.Property(p => p.Description).HasColumnName("description");
            builder.Property(p => p.IsDone).IsRequired().HasColumnName("isDone");
            builder.HasOne(p => p.UserInfo).WithMany(u => u.Trips).HasForeignKey(p => p.UserInfoId).
                OnDelete(DeleteBehavior.Cascade).
                HasConstraintName("fk_userinfoid_trip");
        }
    }
}
