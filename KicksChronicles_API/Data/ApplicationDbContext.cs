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
    }
}
