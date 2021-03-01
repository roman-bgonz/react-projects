using APIGestores.Context;
using APIGestores.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace APIGestores.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GestoresController : ControllerBase
    {
        private readonly AppDbContext context;
        public GestoresController(AppDbContext context)
        {
            this.context = context;
        }

        // GET: api/<GestoresController>
        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                return Ok(context.GestorBD.ToList());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET api/<GestoresController>/5
        [HttpGet("{id}", Name = "GetGestor")]
        public ActionResult Get(int id)
        {
            try
            {
                var gestor = context.GestorBD.FirstOrDefault(gestor => gestor.Id == id);
                return Ok(gestor);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST api/<GestoresController>
        [HttpPost]
        public ActionResult Post([FromBody] Gestor gestor)
        {
            try
            {
                context.GestorBD.Add(gestor);
                context.SaveChanges();
                // Se regresa al usuario el id que se creó, para ello se usa el método anterior
                return CreatedAtRoute("GetGestor", new { gestor.Id }, gestor);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<GestoresController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Gestor gestor)
        {
            try
            {
                if (gestor.Id == id)
                {
                    context.Entry(gestor).State = EntityState.Modified;
                    context.SaveChanges();
                    // Se regresa al usuario el id que se creó, para ello se usa el método anterior
                    return CreatedAtRoute("GetGestor", new { gestor.Id }, gestor);
                }
                else {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<GestoresController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                var gestor = context.GestorBD.FirstOrDefault(gestor => gestor.Id == id);
                if (gestor != null)
                {
                    context.GestorBD.Remove(gestor);
                    context.SaveChanges();
                    return Ok(id);
                }
                else {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
