using KicksChronicles_API.Models;
using Microsoft.EntityFrameworkCore;

namespace KicksChronicles_API.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options)
            : base(options)
        {
        }

        public DbSet<Brand> Brands { get; set; }
        public DbSet<Shoe> Shoes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Brand>().HasData(new Brand
            {
                Id = 1,
                Name = "Nike",
                Description = "Just do it",
                LogoURL = "https://kickschronicles.blob.core.windows.net/brandlogos/nike.svg",
            }, new Brand
            {
                Id = 2,
                Name = "Jordan",
                Description = "Become Legendary",
                LogoURL = "https://kickschronicles.blob.core.windows.net/brandlogos/jordan.svg",
            },
            new Brand
            {
                Id = 3,
                Name = "Adidas",
                Description = "Impossible is Nothing",
                LogoURL = "https://kickschronicles.blob.core.windows.net/brandlogos/adidas-1.svg",
            },
            new Brand
            {
                Id = 4,
                Name = "Converse",
                Description = "We Are All Stars",
                LogoURL = "https://kickschronicles.blob.core.windows.net/brandlogos/converse.svg",
            },
            new Brand
            {
                Id = 5,
                Name = "Under Armour",
                Description = "THE ONLY WAY IS THROUGH",
                LogoURL = "https://kickschronicles.blob.core.windows.net/brandlogos/underarmour.svg",
            },
            new Brand
            {
                Id = 6,
                Name = "New Balance",
                Description = "We Got Now",
                LogoURL = "https://kickschronicles.blob.core.windows.net/brandlogos/newbalance.svg",
            },
            new Brand
            {
                Id = 7,
                Name = "Anta",
                Description = "Keep Moving",
                LogoURL = "https://kickschronicles.blob.core.windows.net/brandlogos/anta.svg",
            },
            new Brand
            {
                Id = 8,
                Name = "Puma",
                Description = "Forever Faster",
                LogoURL = "https://kickschronicles.blob.core.windows.net/brandlogos/puma.svg",
            },
            new Brand
            {
                Id = 9,
                Name = "ASICS",
                Description = "A sound mind is a sound body",
                LogoURL = "https://kickschronicles.blob.core.windows.net/brandlogos/asics.svg",
            });



            modelBuilder.Entity<Shoe>().HasData(new Shoe
            {
                Id = 1,
                Name = "Tmac 1",
                ShoeThumbnailURL = "https://kickschronicles.blob.core.windows.net/adidas/tmac1.jpg",
                BrandId = 3,
            },
            new Shoe
            {
                Id = 2,
                Name = "Westbrook 0.1",
                ShoeThumbnailURL = "https://kickschronicles.blob.core.windows.net/jordan/westbrook-0.1.jpg",
                BrandId = 2,
            },
            new Shoe
            {
                Id = 3,
                Name = "Jordan 1",
                ShoeThumbnailURL = "https://kickschronicles.blob.core.windows.net/jordan/air-jordan-1.jpg",
                BrandId = 2,
            },
            new Shoe
            {
                Id = 4,
                Name = "Tmac 5",
                ShoeThumbnailURL = "https://kickschronicles.blob.core.windows.net/adidas/tmac5.jpg",
                BrandId = 3,
            },
            new Shoe
            {
                Id = 5,
                Name = "Jordan 11",
                ShoeThumbnailURL = "https://kickschronicles.blob.core.windows.net/jordan/jordan-11-spacejam.jpg",
                BrandId = 2,
            },
            new Shoe
            {
                Id = 6,
                Name = "Tatum 1",
                ShoeThumbnailURL = "https://kickschronicles.blob.core.windows.net/jordan/tatum-1.jpg",
                BrandId = 2,
            },
            new Shoe
            {
                Id = 7,
                Name = "Zion 2",
                ShoeThumbnailURL = "https://kickschronicles.blob.core.windows.net/jordan/zion-2.jpg",
                BrandId = 2,
            },new Shoe
            {
                Id = 8,
                Name = "Jordan 38",
                ShoeThumbnailURL = "https://kickschronicles.blob.core.windows.net/jordan/air-jordan-38.jpg",
                BrandId = 2,
            },
            new Shoe
            {
                Id = 9,
                Name = "Westbrook 0.5",
                ShoeThumbnailURL = "https://kickschronicles.blob.core.windows.net/jordan/westbrook-0.5.jpg",
                BrandId = 2,
            },
            new Shoe
            {
                Id = 10,
                Name = "Westbrook 0.6",
                ShoeThumbnailURL = "https://kickschronicles.blob.core.windows.net/jordan/westbrook-0.6.jpg",
                BrandId = 2,
            },
            new Shoe
            {
                Id = 11,
                Name = "Curry 4",
                ShoeThumbnailURL = "https://kickschronicles.blob.core.windows.net/under-armour/curry-4-2.jpg",
                BrandId = 5,
            },
            new Shoe
            {
                Id = 12,
                Name = "Jordan 12",
                ShoeThumbnailURL = "https://kickschronicles.blob.core.windows.net/jordan/jordan-12.jpg",
                BrandId = 2,
            },
            new Shoe
            {
                Id = 13,
                Name = "LeBron 20",
                ShoeThumbnailURL = "https://kickschronicles.blob.core.windows.net/nike/lebron-20.jpg",
                BrandId = 1,
            },
            new Shoe
            {
                Id = 14,
                Name = "LeBron NXXT Gen",
                ShoeThumbnailURL = "https://kickschronicles.blob.core.windows.net/nike/lebron-nxxt-gen.jpg",
                BrandId = 1,
            });

        }
    }
}
