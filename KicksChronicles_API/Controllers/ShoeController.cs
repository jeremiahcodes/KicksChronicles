using KicksChronicles_API.Data;
using KicksChronicles_API.Models;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace KicksChronicles_API.Controllers
{
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
        public async Task<IActionResult> GetBrands()
        {
            _response.Result = _db.Brands;
            _response.StatusCode = HttpStatusCode.OK;
            return Ok(_response);
        }
    }
}
