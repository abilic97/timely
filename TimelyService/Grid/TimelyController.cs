using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TimelyService.Grid
{
    [Route("api/[controller]")]
    [ApiController]
    public class TimelyController : ControllerBase
    {
        private IGridService _gridService;

        public TimelyController(IGridService gridService)
        {
            _gridService = gridService;
        }

        [HttpGet("grid")]
        public Task<IEnumerable<Grid>> getGrids()
        {
            return _gridService.getGrids();
        }


        [HttpGet("grid/{id}")]
        public Task<Grid> getGrid(int id)
        {
            return _gridService.getGrid(id);
        }

        [HttpPost("grid")]
        public Task<Grid> createGrid([FromBody] Grid grid)
        {
            return _gridService.createGrid(grid);   
        }

        [HttpDelete("grid")]
        public Task <int> deleteGrid()
        {
            return _gridService.deleteGrids();
        }

        [HttpPut("grid")]
        public Task updateGrid([FromBody] Grid grid)
        {
            return _gridService.updateGrid(grid);
        }

    }
}
