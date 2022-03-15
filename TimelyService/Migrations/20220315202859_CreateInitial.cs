using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TimelyService.Migrations
{
    public partial class CreateInitial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Grids",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    projectName = table.Column<string>(nullable: true),
                    projectStartDate = table.Column<DateTime>(nullable: false),
                    projectEndDate = table.Column<DateTime>(nullable: false),
                    projectDurationSeconds = table.Column<float>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Grids", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Grids");
        }
    }
}
