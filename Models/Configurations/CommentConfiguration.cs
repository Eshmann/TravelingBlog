using AdventureDb.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AdventureDb.Configurations
{
    public class CommentConfiguration : IEntityTypeConfiguration<Comment>
    {
        public void Configure(EntityTypeBuilder<Comment> builder)
        {
            builder.HasKey(c => new { c.UserId, c.TripId }).HasName("pk_constraint_comment");

            builder.Property(c => c.UserId).HasColumnName("userid");
            builder.Property(c => c.TripId).HasColumnName("TripId");

            builder.HasOne(c => c.User).WithMany(u => u.Comments).HasForeignKey(c => c.UserId)
                .HasConstraintName("fk_constraint_userid_comment").OnDelete(DeleteBehavior.Restrict);
            builder.HasOne(c => c.Trip).WithMany(p => p.Comments).HasForeignKey(c => c.TripId)
                .HasConstraintName("fk_constraint_TripId_comment").OnDelete(DeleteBehavior.Cascade);
            builder.Property(b => b.Content).IsRequired().HasColumnName("Content");
        }
    }
}
