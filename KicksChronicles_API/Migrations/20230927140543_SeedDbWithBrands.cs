using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace KicksChronicles_API.Migrations
{
    /// <inheritdoc />
    public partial class SeedDbWithBrands : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Brands",
                columns: new[] { "Id", "Description", "LogoURL", "Name" },
                values: new object[,]
                {
                    { 1, "Just do it", "https://kickschronicles.blob.core.windows.net/brandlogos/nike.svg", "Nike" },
                    { 2, "Become Legendary", "https://kickschronicles.blob.core.windows.net/brandlogos/jordan.svg", "Jordan" },
                    { 3, "Impossible is Nothing", "https://kickschronicles.blob.core.windows.net/brandlogos/adidas-1.svg", "Adidas" },
                    { 4, "We Are All Stars", "https://kickschronicles.blob.core.windows.net/brandlogos/converse.svg", "Converse" },
                    { 5, "THE ONLY WAY IS THROUGH", "https://kickschronicles.blob.core.windows.net/brandlogos/underarmour.svg", "Under Armour" },
                    { 6, "We Got Now", "https://kickschronicles.blob.core.windows.net/brandlogos/newbalance.svg", "New Balance" },
                    { 7, "Keep Moving", "https://kickschronicles.blob.core.windows.net/brandlogos/anta.svg", "Anta" },
                    { 8, "Forever Faster", "https://kickschronicles.blob.core.windows.net/brandlogos/puma.svg", "Puma" },
                    { 9, "A sound mind is a sound body", "https://kickschronicles.blob.core.windows.net/brandlogos/asics.svg", "ASICS" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Brands",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Brands",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Brands",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Brands",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Brands",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Brands",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Brands",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Brands",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Brands",
                keyColumn: "Id",
                keyValue: 9);
        }
    }
}
