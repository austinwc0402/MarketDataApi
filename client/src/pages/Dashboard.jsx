import { useState } from "react"
import SearchBar from "../components/SearchBar"
import JsonViewer from "../components/JsonViewer"
import CardViewer from "../components/CardViewer"
import ErrorMessage from "../components/ErrorMessage"
import { getMarketData } from "../services/api"

export default function Dashboard() {
    const [jsonData, setJsonData] = useState(null);
    const [lastSymbol, setLastSymbol] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSearch(symbol) {
        try {
            setErrorMessage("");
            setLastSymbol(symbol);
            const data = await getMarketData(symbol);
            setJsonData(data);
        } catch (err) {
            console.log(err)
            setJsonData(null);
            setErrorMessage(err.message);
        }
    };
    
    return (
        <div style={styles.page}>
            <div style={styles.card}>
                {errorMessage && <ErrorMessage error={errorMessage} />}

                <h1 style={styles.title}>Market Data Lookup</h1>
    
                <SearchBar onSearch={handleSearch} />
    
                <div style={styles.columns}>
                    <div>
                        <h3>JSON Output {lastSymbol && `- ${lastSymbol}`}</h3>
                        <JsonViewer data={jsonData} />
                    </div>
                    
                    <div>
                        <h3>Data Cards</h3>
                        <CardViewer summaries={jsonData} />
                    </div>
                </div>
            </div>
        </div>
    );
};


const styles = {
  page: {
    height: "100vh",
    width: "100vw",
    background: "linear-gradient(135deg, #dbeafe, #93c5fd)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px"
  },
  card: {
    width: "90%",
    maxWidth: "1100px",
    background: "white",
    borderRadius: "20px",
    boxShadow: "0px 8px 30px rgba(0,0,0,0.15)",
    padding: "30px"
  },
  title: {
    marginBottom: "20px",
    textAlign: "center"
  },
  columns: {
    marginTop: "20px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px"
  }
};
