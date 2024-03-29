﻿// <auto-generated />
using KicksChronicles_API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace KicksChronicles_API.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20230927140543_SeedDbWithBrands")]
    partial class SeedDbWithBrands
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.11")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("KicksChronicles_API.Models.Brand", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LogoURL")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Brands");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Description = "Just do it",
                            LogoURL = "https://kickschronicles.blob.core.windows.net/brandlogos/nike.svg",
                            Name = "Nike"
                        },
                        new
                        {
                            Id = 2,
                            Description = "Become Legendary",
                            LogoURL = "https://kickschronicles.blob.core.windows.net/brandlogos/jordan.svg",
                            Name = "Jordan"
                        },
                        new
                        {
                            Id = 3,
                            Description = "Impossible is Nothing",
                            LogoURL = "https://kickschronicles.blob.core.windows.net/brandlogos/adidas-1.svg",
                            Name = "Adidas"
                        },
                        new
                        {
                            Id = 4,
                            Description = "We Are All Stars",
                            LogoURL = "https://kickschronicles.blob.core.windows.net/brandlogos/converse.svg",
                            Name = "Converse"
                        },
                        new
                        {
                            Id = 5,
                            Description = "THE ONLY WAY IS THROUGH",
                            LogoURL = "https://kickschronicles.blob.core.windows.net/brandlogos/underarmour.svg",
                            Name = "Under Armour"
                        },
                        new
                        {
                            Id = 6,
                            Description = "We Got Now",
                            LogoURL = "https://kickschronicles.blob.core.windows.net/brandlogos/newbalance.svg",
                            Name = "New Balance"
                        },
                        new
                        {
                            Id = 7,
                            Description = "Keep Moving",
                            LogoURL = "https://kickschronicles.blob.core.windows.net/brandlogos/anta.svg",
                            Name = "Anta"
                        },
                        new
                        {
                            Id = 8,
                            Description = "Forever Faster",
                            LogoURL = "https://kickschronicles.blob.core.windows.net/brandlogos/puma.svg",
                            Name = "Puma"
                        },
                        new
                        {
                            Id = 9,
                            Description = "A sound mind is a sound body",
                            LogoURL = "https://kickschronicles.blob.core.windows.net/brandlogos/asics.svg",
                            Name = "ASICS"
                        });
                });

            modelBuilder.Entity("KicksChronicles_API.Models.Shoe", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("BrandId")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ShoeThumbnailURL")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("BrandId");

                    b.ToTable("Shoes");
                });

            modelBuilder.Entity("KicksChronicles_API.Models.Shoe", b =>
                {
                    b.HasOne("KicksChronicles_API.Models.Brand", null)
                        .WithMany("Shoes")
                        .HasForeignKey("BrandId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("KicksChronicles_API.Models.Brand", b =>
                {
                    b.Navigation("Shoes");
                });
#pragma warning restore 612, 618
        }
    }
}
