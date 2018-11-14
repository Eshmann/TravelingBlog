using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.DataAcceesLayer.Configurations
{
    public class SubscriptionConfiguration : IEntityTypeConfiguration<Subscription>
    {
        public void Configure(EntityTypeBuilder<Subscription> builder)
        {
            builder.HasKey(s => new { s.UserInfoId, s.SubcriberId }).HasName("pk_constraint_subscription");

            builder.Property(s => s.UserInfoId).HasColumnName("userinfoid");
            builder.Property(s => s.SubcriberId).HasColumnName("subscriberid");

            builder.HasOne(s => s.UserInfoIdNavigation).WithMany(u => u.RelationWithUserIdNavigation)
                .HasForeignKey(s => s.UserInfoId).HasConstraintName("fk_constraint_userinfoid_subscription").
                OnDelete(DeleteBehavior.Restrict);
            builder.HasOne(s => s.SubscriberIdNavidgation).WithMany(u => u.RelationWithSubscriberIdNavigation)
                .HasForeignKey(s => s.SubcriberId).
                HasConstraintName("fk_constraint_subscriberid_subscription").
                OnDelete(DeleteBehavior.Cascade);
        }
    }
}
