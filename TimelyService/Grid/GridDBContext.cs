using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TimelyService.Grid
{
    public class GridDBContext : DbContext
    {
        public GridDBContext(DbContextOptions<GridDBContext> options) : base(options) { }

        public DbSet<Grid> Grids { get; set; }
    }
}
