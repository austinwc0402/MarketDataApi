# Overview
MarketDataApi is a full-stack application built for a technical assessment.
It includes:
 - A C# ASP.NET Core 8 Web API backend that consumes AlphaVantage's intraday stock market data and exposes a simplified aggregated API.
 - A React frontend that lets users search stock symbols, auto suggest companies, visualize JSON output, and display data cards.

The API aggregates the last month of 15-minute intraday data and groups it by day in the format:
```json
[
  {
    "day": "2025-10-31",
    "lowAverage": 519.9778,
    "highAverage": 522.9456,
    "volume": 38540618
  },
  ...
]
```

# How to Run the Project
1. Clone Repository
   ```bash
    git clone https://github.com/austinwc0402/MarketDataApi.git
    cd MarketDataApi
   ```
2. Install Dependencies
   Inside the backend folder `MarketDataApi`
   ```bash
    cd MarketDataApi
    dotnet restore
   ```
3. Run the API
   
   ```dotnet run```
   
   The backend will begin running on:
   ```
    HTTPS: https://localhost:7072
    HTTP: http://localhost:5282
   ```
5. API Endpoints
   
   Get Daily Summaries
   ```
    /api/alphavantage?symbol=<symbol>
   ```

# Using Postman/Insomnia
Use url: `https://localhost:7072/api/AlphaVantage?symbol=<input-symbol>`

# Frontend
1. Install Dependencies
   
   From directory `./MarketDataApi`
   ```bash
    cd client
    npm install
   ```
3. Start Frontend
   
   ``` npm start ```
   
   The frontend will begin running on:
   ```
   HTTP: http://localhost:3000
   ```
