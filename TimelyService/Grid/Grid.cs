using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TimelyService.Grid
{
    public class Grid
    {
        public int id { get; set; }
        public string projectName { get; set; }
        public DateTime projectStartDate { get; set; }
        public DateTime projectEndDate { get; set; }
        public float projectDurationSeconds { get; set; }
    }
}
