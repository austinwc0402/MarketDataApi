using Microsoft.AspNetCore.Mvc;

namespace MarketDataApi.Models
{
    public class DailySummary
    {
        public string Day { get; set; }
        public decimal LowAverage { get; set; }
        public decimal HighAverage { get; set; }
        public long Volume { get; set; }

        public DailySummary() { }

        public DailySummary(string day, string lowAverage, string highAverage, long volume)
        {
            Day = day;
            LowAverage = Convert.ToDecimal(lowAverage);
            HighAverage = Convert.ToDecimal(highAverage);
            Volume = volume;
        }
    }
}
