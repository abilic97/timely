using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TimelyService.Grid
{
    public class GridService : IGridService
    {
        private GridDBContext _context;
        public GridService(GridDBContext context)
        {
            _context = context;
        }

        public async Task <IEnumerable<Grid>> getGrids()
        {
            return await _context.Grids.ToListAsync();
        }

        public async Task<Grid> getGrid(int id)
        {
            return await _context.Grids.FindAsync(id);

        }
        public async Task <Grid> createGrid(Grid grid)
        {
            _context.Grids.AddAsync(grid);
            await _context.SaveChangesAsync();
            return grid;
        }

        public async Task<int> deleteGrids()
        {
            _context.Grids.RemoveRange(_context.Grids);
            return await _context.SaveChangesAsync();
        }

        public async Task updateGrid(Grid grid)
        {
            _context.Entry(grid).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
    }
}
