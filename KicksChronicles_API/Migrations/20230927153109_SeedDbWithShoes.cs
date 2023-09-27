using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace KicksChronicles_API.Migrations
{
    /// <inheritdoc />
    public partial class SeedDbWithShoes : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Shoes",
                columns: new[] { "Id", "BrandId", "Name", "ShoeThumbnailURL" },
                values: new object[,]
                {
                    { 1, 3, "Tmac 1", "https://kickschronicles.blob.core.windows.net/adidas/tmac1.jpg" },
                    { 2, 2, "Westbrook 0.1", "https://kickschronicles.blob.core.windows.net/jordan/westbrook-0.1.jpg" },
                    { 3, 2, "Jordan 1", "https://kickschronicles.blob.core.windows.net/jordan/air-jordan-1.jpg" },
                    { 4, 3, "Tmac 5", "https://kickschronicles.blob.core.windows.net/adidas/tmac5.jpg" },
                    { 5, 2, "Jordan 11", "https://kickschronicles.blob.core.windows.net/jordan/jordan-11-spacejam.jpg" },
                    { 6, 2, "Tatum 1", "https://kickschronicles.blob.core.windows.net/jordan/tatum-1.jpg" },
                    { 7, 2, "Zion 2", "https://kickschronicles.blob.core.windows.net/jordan/zion-2.jpg" },
                    { 8, 2, "Jordan 38", "https://kickschronicles.blob.core.windows.net/jordan/air-jordan-38.jpg" },
                    { 9, 2, "Westbrook 0.5", "https://kickschronicles.blob.core.windows.net/jordan/westbrook-0.5.jpg" },
                    { 10, 2, "Westbrook 0.6", "https://kickschronicles.blob.core.windows.net/jordan/westbrook-0.6.jpg" },
                    { 11, 5, "Curry 4", "https://kickschronicles.blob.core.windows.net/under-armour/curry-4-2.jpg" },
                    { 12, 2, "Jordan 12", "https://kickschronicles.blob.core.windows.net/jordan/jordan-12.jpg" },
                    { 13, 1, "LeBron 20", "https://kickschronicles.blob.core.windows.net/nike/lebron-20.jpg" },
                    { 14, 1, "LeBron NXXT Gen", "https://kickschronicles.blob.core.windows.net/nike/lebron-nxxt-gen.jpg" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Shoes",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Shoes",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Shoes",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Shoes",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Shoes",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Shoes",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Shoes",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Shoes",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Shoes",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Shoes",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Shoes",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Shoes",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Shoes",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Shoes",
                keyColumn: "Id",
                keyValue: 14);
        }
    }
}
