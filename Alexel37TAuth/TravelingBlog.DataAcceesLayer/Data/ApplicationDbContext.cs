using TravelingBlog.DataAcceesLayer.Models.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using TravelingBlog.DataAcceesLayer.Configurations;

namespace TravelingBlog.DataAcceesLayer.Data
{
    public class ApplicationDbContext : IdentityDbContext<AppUser>
    {
        public ApplicationDbContext(DbContextOptions options):base(options)
        {
        }

        public DbSet<UserInfo> UserInfoes { get; set; }
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Country> Countries { get; set; }
        public DbSet<CountryPostBlog> CountryPostBlogs { get; set; }
        public DbSet<CountryTrip> CountryTrips { get; set; }
        public DbSet<Currency> Currencies { get; set; }
        public DbSet<Image> Images { get; set; }
        public DbSet<PostBlog> PostBlogs { get; set; }
        public DbSet<Purchase> Purchases { get; set; }
        public DbSet<Rating> Ratings { get; set; }
        public DbSet<Subscription> Subscriptions { get; set; }
        public DbSet<Tag> Tags { get; set; }
        public DbSet<TagPostBlog> TagPostBlogs { get; set; }
        public DbSet<TagTrip> TagTrips { get; set; }
        public DbSet<Trip> Trips { get; set; }
        public DbSet<UserImage> UserImages { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.ApplyConfiguration(new CommentConfiguration());
            modelBuilder.ApplyConfiguration(new CountryConfiguration());
            modelBuilder.ApplyConfiguration(new TripConfiguration());
            modelBuilder.ApplyConfiguration(new PostBlogConfiguration());
            modelBuilder.ApplyConfiguration(new PurchaseConfiguration());
            modelBuilder.ApplyConfiguration(new RatingConfiguration());
            modelBuilder.ApplyConfiguration(new SubscriptionConfiguration());
            modelBuilder.ApplyConfiguration(new TagConfiguration());
            modelBuilder.ApplyConfiguration(new TagTripConfiguration());
            modelBuilder.ApplyConfiguration(new TagPostBlogConfiguration());
            modelBuilder.ApplyConfiguration(new UserInfoConfiguration());
            modelBuilder.ApplyConfiguration(new CurrencyConfiguration());
            modelBuilder.ApplyConfiguration(new CountryTripConfiguration());
            modelBuilder.ApplyConfiguration(new ImageConfiguration());
            modelBuilder.ApplyConfiguration(new CountryPostBlogConfiguration());
            modelBuilder.ApplyConfiguration(new UserImageConfiguration());
        }

    }
}
