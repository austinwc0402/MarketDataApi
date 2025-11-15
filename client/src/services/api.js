const API_BASE_URL = "https://localhost:7072/api";

export async function getMarketData(symbol) {
    const res = await fetch(`${API_BASE_URL}/AlphaVantage?symbol=${symbol}`);
    if (!res.ok) {
      const errorBody = await res.json();
      throw new Error(errorBody.error);
    } 

    return res.json();
}