using KicksChronicles_API.Data;
using KicksChronicles_API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace KicksChronicles_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShoeController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        private ApiResponse _response;
        public ShoeController(ApplicationDbContext db)
        {
            _db = db;
            _response = new ApiResponse();
        }

        [HttpGet]
        public async Task<IActionResult> GetShoes()
        {
            _response.Result = _db.Shoes;
            _response.StatusCode = HttpStatusCode.OK;
            return Ok(_response);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetShoesByBrand(int id)
        {
            var shoeHeaders = _db.Shoes
                   .Where(u => u.BrandId == id);
            _response.Result = shoeHeaders;
            _response.StatusCode = HttpStatusCode.OK;
            return Ok(_response);
        }
    }
}
