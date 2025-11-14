const API_BASE_URL = "https://localhost:7072/api";

export async function getMarketData(symbol) {
    const res = await fetch(`${API_BASE_URL}/AlphaVantage?symbol=${symbol}`);
    if (!res.ok) {
      const errorBody = await res.text();
      console.error(errorBody);
      throw new Error("Error fetching data");  
    } 
    return res.json();
}