using AdventureDb.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AdventureDb.Configurations
{
    public class SubscriptionConfiguration : IEntityTypeConfiguration<Subscription>
    {
        public void Configure(EntityTypeBuilder<Subscription> builder)
        {
            builder.HasKey(s => new { s.UserId, s.SubcriberId }).HasName("pk_constraint_subscription");

            builder.Property(s => s.UserId).HasColumnName("userid");
            builder.Property(s => s.SubcriberId).HasColumnName("subscriberid");

            builder.HasOne(s => s.UserIdNavigation).WithMany(u => u.RelationWithUserIdNavigation)
                .HasForeignKey(s => s.UserId).HasConstraintName("fk_constraint_userid_subscription").
                OnDelete(DeleteBehavior.Restrict);
            builder.HasOne(s => s.SubscriberIdNavidgation).WithMany(u => u.RelationWithSubscriberIdNavigation)
                .HasForeignKey(s => s.SubcriberId).
                HasConstraintName("fk_constraint_subscriberid_subscription").
                OnDelete(DeleteBehavior.Cascade);
        }
    }
}
