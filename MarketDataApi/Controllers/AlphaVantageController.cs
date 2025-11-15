using MarketDataApi.Models;
using MarketDataApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace MarketDataApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlphaVantageController : ControllerBase
    {
        private readonly AlphaVantageService _alphaVantageService;

        public AlphaVantageController(AlphaVantageService alphaVantageService)
        {
            _alphaVantageService = alphaVantageService;
        }

        [HttpGet]
        public IActionResult GetDailySummaries([FromQuery] string symbol)
        {
            try
            {
                List<DailySummary> summaries = _alphaVantageService.GetDailySummaries(symbol);
                return Ok(summaries);
            }
            catch (Exception ex)
            {
                return BadRequest(new { error = ex.Message });
            }
        }
    }
}
