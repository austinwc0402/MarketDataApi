namespace MarketDataApi.Models
{
    public class IntradayRecord
    {
        public DateTime TimeStamp { get; set; }
        public decimal Open { get; set; }
        public decimal High { get; set; }
        public decimal Low { get; set; }
        public decimal Close { get; set; }
        public long Volume { get; set; }

        public IntradayRecord() { }

        public IntradayRecord(DateTime timeStamp, decimal open, decimal high, decimal low, decimal close, long volume)
        {
            TimeStamp = timeStamp;
            Open = open;
            High = high;
            Low = low;
            Close = close;
            Volume = volume;
        }
    }
}
