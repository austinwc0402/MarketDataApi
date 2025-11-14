using MarketDataApi.Models;
using System.Net;
using System.Text.Json;

namespace MarketDataApi.Services
{
    public class AlphaVantageService
    {
        private readonly string _apiKey;

        public AlphaVantageService(IConfiguration config)
        {
            _apiKey = config["AlphaVantage:ApiKey"] ?? throw new Exception("Missing API key.");
        }

        public List<DailySummary> GetDailySummaries(string symbol)
        {
            DateTime currentDateTime = DateTime.Now;
            string month = currentDateTime.ToString("yyyy-MM");
            string QUERY_URL = $"https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol={symbol}&interval=15min&month={month}&outputsize=full&apikey={_apiKey}";
            Uri uri = new Uri(QUERY_URL);

            using (WebClient client = new WebClient())
            {
                dynamic json_data = JsonSerializer.Deserialize<Dictionary<string, dynamic>>(client.DownloadString(uri));
                
                List<IntradayRecord> records = new List<IntradayRecord>();

                try
                {
                    var timeSeries = json_data["Time Series (15min)"];

                    foreach (var obj in timeSeries.EnumerateObject())
                    {
                        string timestamp = obj.Name;
                        var values = obj.Value;

                        IntradayRecord record = new IntradayRecord
                        {
                            TimeStamp = DateTime.Parse(timestamp),
                            Open = decimal.Parse(values.GetProperty("1. open").GetString()),
                            High = decimal.Parse(values.GetProperty("2. high").GetString()),
                            Low = decimal.Parse(values.GetProperty("3. low").GetString()),
                            Close = decimal.Parse(values.GetProperty("4. close").GetString()),
                            Volume = long.Parse(values.GetProperty("5. volume").GetString())
                        };

                        records.Add(record);
                    }

                    List<DailySummary> summaries = GetSummaries(records);

                    return summaries;
                }
                catch (KeyNotFoundException ex)
                {
                    throw new Exception("Symbol does not exist");
                }
                catch (Exception ex)
                {
                    throw new Exception("Error: " + ex.Message);
                }
            }
        }

        private List<DailySummary> GetSummaries(List<IntradayRecord> records)
        {
            var summaries = records
                .GroupBy(r => r.TimeStamp.Date)
                .Select(g => new DailySummary(
                    g.Key.ToString("yyyy-MM-dd"),
                    g.Average(r => r.Low).ToString("F4"),
                    g.Average(r => r.High).ToString("F4"),
                    g.Sum(r => r.Volume)
                ))
                .OrderByDescending(summary => summary.Day)
                .ToList();

            return summaries;
        }
    }
}
