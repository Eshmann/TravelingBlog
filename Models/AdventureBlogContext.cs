using AdventureDb.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace AdventureDb
{
    public class AdventureBlogContext:DbContext
    {
        public AdventureBlogContext()
        {

        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=DESKTOP-PDG2T0A\SQLEXPRESS;Database=AdventureDbTest;Trusted_Connection=True;");
        }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Country> Countries { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<PostBlog> PostBlogs { get; set; }
        public DbSet<Purchase> Purchases { get; set; }
        public DbSet<Rating> Ratings { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Subscription> Subscriptions { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<TagPost> TagPosts { get; set; }
        public DbSet<TagPostBlog> TagPostBlogs { get; set; }
        public DbSet<User> Users { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new CommentConfiguration());
            modelBuilder.ApplyConfiguration(new CountryConfiguration());
            modelBuilder.ApplyConfiguration(new PostConfiguration());
            modelBuilder.ApplyConfiguration(new PostBlogConfiguration());
            modelBuilder.ApplyConfiguration(new PurchaseConfiguration());
            modelBuilder.ApplyConfiguration(new RatingConfiguration());
            modelBuilder.ApplyConfiguration(new RoleConfiguration());
            modelBuilder.ApplyConfiguration(new SubscriptionConfiguration());
            modelBuilder.ApplyConfiguration(new TagConfiguration());
            modelBuilder.ApplyConfiguration(new TagPostConfiguration());
            modelBuilder.ApplyConfiguration(new TagPostBlogConfiguration());
            modelBuilder.ApplyConfiguration(new UserConfiguration());
        }
    }
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasKey(U => U.Id).HasName("pk_constraint_user");
            builder.Property(u => u.Id).HasColumnName("id");
            builder.HasIndex(u => u.Email).HasName("user_email_unique").IsUnique();
            builder.HasIndex(u => u.Phone).HasName("user_phone_unique").IsUnique();
            builder.Property(u => u.Email).IsRequired().HasColumnName("email").HasMaxLength(40);
            builder.Property(u => u.Phone).IsRequired().HasColumnName("phone").HasMaxLength(10);
            builder.Property(u => u.FirstName).IsRequired(true).HasColumnName("firstname").HasMaxLength(50);
            builder.Property(u => u.LastName).IsRequired(true).HasColumnName("lastname").HasMaxLength(50);
            builder.Property(u => u.DateOfBirth).HasColumnName("dateofbirth").HasColumnType("date");
            builder.HasOne(u => u.Country).WithMany(u => u.Users).HasForeignKey(u => u.CountryId).
                OnDelete(DeleteBehavior.SetNull).HasConstraintName("fk_constraint_country_user");
            builder.HasOne(u => u.Role).WithMany(r => r.Users).HasForeignKey(u => u.RoleId).
                HasConstraintName("fk_constraint_role_user").OnDelete(DeleteBehavior.Cascade);
            builder.Property(u => u.CountryId).HasColumnName("country_id");
            builder.Property(u => u.RoleId).HasColumnName("role_id");
        }
    }
    /*migrationBuilder.Sql("alter table Role " +
                "add constraint check_role check(rolename in ('User','Admin','Moderator'))");
            migrationBuilder.Sql("alter table Rating add constraint check_ratingpostblog check(ratingpostblog in (-1,0,1))");
            //migrationBuilder.Sql("alter table User add check(phone LIKE '0[0-9]{9}')");*/
    public class TagPostBlogConfiguration : IEntityTypeConfiguration<TagPostBlog>
    {
        public void Configure(EntityTypeBuilder<TagPostBlog> builder)
        {
            builder.HasKey(tpb => new { tpb.TagId, tpb.PostBlogId }).HasName("pk_constraint_tagpostblog");

            builder.Property(tpb => tpb.TagId).HasColumnName("tagid");
            builder.Property(tpb => tpb.PostBlogId).HasColumnName("postblogid");

            builder.HasOne(tpb => tpb.Tag).WithMany(t => t.TagPostBlogs).HasForeignKey(tpb => tpb.TagId)
                .HasConstraintName("fk_constraint_tagid_tagpostblog").OnDelete(DeleteBehavior.Cascade);
            builder.HasOne(tpb => tpb.PostBlog).WithMany(t => t.TagPostBlogs).HasForeignKey(tpb => tpb.PostBlogId)
                .HasConstraintName("fk_constraint_postblogid_tagpostblog").OnDelete(DeleteBehavior.Cascade);
        }
    }

    public class TagPostConfiguration : IEntityTypeConfiguration<TagPost>
    {
        public void Configure(EntityTypeBuilder<TagPost> builder)
        {
            builder.HasKey(tp => new { tp.TagId, tp.PostId }).HasName("pk_constraint_tagpost");

            builder.Property(tp => tp.TagId).HasColumnName("tagid");
            builder.Property(tp => tp.PostId).HasColumnName("postid");

            builder.HasOne(tp => tp.Tag).WithMany(t => t.TagPosts).HasForeignKey(tp => tp.TagId)
                .HasConstraintName("fk_constraint_tagid_tagpost").OnDelete(DeleteBehavior.Cascade);
            builder.HasOne(tp => tp.Post).WithMany(t => t.TagPosts).HasForeignKey(tp => tp.PostId)
                .HasConstraintName("fk_constraint_postid_tagpost").OnDelete(DeleteBehavior.Cascade);
        }
    }

    public class TagConfiguration : IEntityTypeConfiguration<Tag>
    {
        public void Configure(EntityTypeBuilder<Tag> builder)
        {
            builder.HasKey(t => t.Id).HasName("pk_constraint_tag");
            builder.Property(t => t.Id).HasColumnName("id");

            builder.Property(t => t.Name).IsRequired().HasColumnName("tagname");
            builder.HasAlternateKey(t => t.Name).HasName("uq_constraint_tag");
        }
    }

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

    public class RoleConfiguration : IEntityTypeConfiguration<Role>
    {
        public void Configure(EntityTypeBuilder<Role> builder)
        {
            builder.HasKey(r => r.Id).HasName("pk_constraint_role");
            builder.Property(r => r.Id).HasColumnName("id");
            builder.Property(r => r.Name).IsRequired().HasColumnName("rolename").HasDefaultValue("User");            
        }
    }

    public class RatingConfiguration : IEntityTypeConfiguration<Rating>
    {
        public void Configure(EntityTypeBuilder<Rating> builder)
        {
            builder.HasKey(r => new { r.UserId, r.PostBlogId }).HasName("pk_constraint_rating");

            builder.Property(r => r.UserId).HasColumnName("userid");
            builder.Property(r => r.PostBlogId).HasColumnName("postblogid");

            builder.Property(r => r.RatingPostBlog).IsRequired().HasColumnName("ratingpostblog").HasDefaultValue(0);

            builder.HasOne(r => r.User).WithMany(u => u.Ratings).HasForeignKey(r => r.UserId)
                .HasConstraintName("fk_constraint_userid_rating").OnDelete(DeleteBehavior.Restrict);
            builder.HasOne(r => r.PostBlog).WithMany(pb => pb.Ratings).HasForeignKey(r => r.PostBlogId)
                .HasConstraintName("fk_constraint_postblogid_rating").OnDelete(DeleteBehavior.Cascade);

        }
    }

    public class PurchaseConfiguration : IEntityTypeConfiguration<Purchase>
    {
        public void Configure(EntityTypeBuilder<Purchase> builder)
        {
            builder.HasKey(p => p.Id).HasName("pk_constraint_purchase");
            builder.Property(p => p.Id).HasColumnName("id");

            builder.Property(p => p.Description).IsRequired().HasColumnName("description");

            builder.Property(p => p.AmountSpent).IsRequired().HasColumnName("amountspent");

            builder.HasOne(p => p.PostBlog).WithMany(pb => pb.Purchases).HasForeignKey(p => p.PostBlogId)
                .HasConstraintName("fk_constraint_purchase").OnDelete(DeleteBehavior.Cascade);
        }
    }

    public class PostBlogConfiguration : IEntityTypeConfiguration<PostBlog>
    {
        public void Configure(EntityTypeBuilder<PostBlog> builder)
        {
            builder.HasKey(p => p.Id).HasName("pk_constraint_postblog");
            builder.Property(p => p.Id).HasColumnName("id");

            builder.Property(p => p.Name).IsRequired().HasColumnName("namepostblog").HasMaxLength(100);
            builder.Property(p => p.Plot).IsRequired().HasColumnName("plot");

            builder.Property(p => p.DateOfCreation).IsRequired().HasColumnType("datetime").
                HasColumnName("creationdate");
            builder.Property(p => p.PostId).HasColumnName("postid");
            builder.HasOne(p => p.Post).WithMany(p => p.PostBlogs).HasForeignKey(p => p.PostId)
                .HasConstraintName("fk_constraint_postblog").OnDelete(DeleteBehavior.Cascade);
        }
    }

    public class PostConfiguration : IEntityTypeConfiguration<Post>
    {
        public void Configure(EntityTypeBuilder<Post> builder)
        {
            builder.HasKey(p => p.Id).HasName("pk_constraint_post");
            builder.Property(p => p.Id).HasColumnName("id");
            builder.HasAlternateKey(p => p.Name).HasName("uq_constraint_post");
            builder.Property(p => p.Name).HasColumnName("postname");
            builder.Property(p => p.IsDone).IsRequired().HasColumnName("isDone");
            builder.HasOne(p => p.User).WithMany(u => u.Posts).HasForeignKey(p => p.UserId).
                OnDelete(DeleteBehavior.Cascade).
                HasConstraintName("fk_userid_post");            
        }
    }

    public class CountryConfiguration : IEntityTypeConfiguration<Country>
    {
        public void Configure(EntityTypeBuilder<Country> builder)
        {
            builder.HasKey(c => c.Id).HasName("pk_constraint_country");
            builder.Property(c => c.Id).HasColumnName("id");
            builder.HasAlternateKey(c => c.MobCode).HasName("uq_constraint_mobcode_country");
            builder.Property(c => c.MobCode).IsRequired().HasColumnName("mobilecode").HasMaxLength(5);
        }
    }

    public class CommentConfiguration : IEntityTypeConfiguration<Comment>
    {
        public void Configure(EntityTypeBuilder<Comment> builder)
        {
            builder.HasKey(c => new { c.UserId, c.PostId }).HasName("pk_constraint_comment");

            builder.Property(c => c.UserId).HasColumnName("userid");
            builder.Property(c => c.PostId).HasColumnName("postid");

            builder.HasOne(c => c.User).WithMany(u => u.Comments).HasForeignKey(c => c.UserId)
                .HasConstraintName("fk_constraint_userid_comment").OnDelete(DeleteBehavior.Restrict);
            builder.HasOne(c => c.Post).WithMany(p => p.Comments).HasForeignKey(c => c.PostId)
                .HasConstraintName("fk_constraint_postid_comment").OnDelete(DeleteBehavior.Cascade);
            builder.Property(b => b.Content).IsRequired().HasColumnName("Content");
        }
    }
}
