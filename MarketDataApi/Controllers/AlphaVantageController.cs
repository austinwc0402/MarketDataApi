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
            List<DailySummary> summaries = _alphaVantageService.GetDailySummaries(symbol);
            return Ok(summaries);
        }
    }
}
