using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TimelyService.Grid
{
    public interface IGridService
    {
        public Task<IEnumerable<Grid>> getGrids();
        public Task<Grid> getGrid(int id);
        public Task<Grid> createGrid(Grid grid);
        public Task<int> deleteGrids();
        public Task updateGrid(Grid grid);
    }
}
