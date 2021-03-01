using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace APIGestores.Models
{
    public class Gestor
    {
        [Key]
        public int Id { get; set; }

        public string Nombre { get; set; }

        public int Lanzamiento { get; set; }

        public string Desarrollador { get; set; }
    }
}
