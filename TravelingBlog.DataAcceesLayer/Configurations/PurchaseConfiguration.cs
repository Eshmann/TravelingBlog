using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TravelingBlog.DataAcceesLayer.Models.Entities;

namespace TravelingBlog.DataAcceesLayer.Configurations
{
    public class PurchaseConfiguration : IEntityTypeConfiguration<Purchase>
    {
        public void Configure(EntityTypeBuilder<Purchase> builder)
        {
            builder.HasKey(p => p.Id).HasName("pk_constraint_purchase");
            builder.Property(p => p.Id).HasColumnName("id");

            builder.Property(p => p.Description).IsRequired().HasColumnName("description");

            builder.Property(p => p.AmountSpent).IsRequired().HasColumnName("amountspent");

            builder.HasOne(p => p.PostBlog).WithMany(pb => pb.Purchases).HasForeignKey(p => p.PostBlogId)
                .HasConstraintName("fk_constraint_purchase_postblogid").OnDelete(DeleteBehavior.Cascade);
            builder.HasOne(p => p.Currency).WithMany(c => c.Purchases).HasForeignKey(p => p.CurrencyId)
                .HasConstraintName("fk_constraint_purchase_currencyid").OnDelete(DeleteBehavior.Cascade);
        }
    }
}
