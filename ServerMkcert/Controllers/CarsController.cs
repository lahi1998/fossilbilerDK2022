using Microsoft.AspNetCore.Mvc;
using ServerMkcert.Models;
using System.Collections.Generic;

namespace ServerMkcert.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarsController : ControllerBase
    {
        private static List<Car> cars = new List<Car>();

        [HttpPost("addCar")]
        public IActionResult AddCar(CarDTO newCar)
        {
            if (newCar == null)
            {
                return BadRequest("Invalid car data");
            }

            // Generate a unique number for the car
            int uniqueNr = cars.Count + 1;

            // Create a new Car object from the CarDTO
            Car carToAdd = new Car
            {
                Nr = uniqueNr,
                Model = newCar.Model,
                Antal = newCar.Antal,
                AEndringAntal = newCar.AEndringAntal
            };

            // Add the new car to the list
            cars.Add(carToAdd);

            return Ok(carToAdd);
        }

        [HttpGet("getAllCars")]
        public IActionResult GetAllCars()
        {
            return Ok(cars);
        }
    }
}
