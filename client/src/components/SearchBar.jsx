import { useState } from "react"
import nyseSymbols from "../data/nyse_full_tickers.json"
import nasdaqSymbols from "../data/nasdaq_full_tickers.json"

export default function SearchBar({ onSearch }) {
    const [input, setInput] = useState("");
    const [matches, setMatches] = useState([]);

    const handleChange = (e) => {
        const value = e.target.value.toUpperCase();

        setInput(value);

        if (value.length === 0) {
            setMatches([]);
            return;
        }

        const nyseFiltered = nyseSymbols.filter((sym) => sym["symbol"].startsWith(value));
        const nasdaqFilter = nasdaqSymbols.filter((sym) => sym["symbol"].startsWith(value));

        const combinedFilter = [...nyseFiltered, ...nasdaqFilter];

        setMatches(combinedFilter.slice(0, 10));
    };

    const handleSelect = (symbol) => {
        setInput(symbol);
        setMatches([]);
        onSearch(symbol);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            onSearch(input.trim());
        }

        // Removes the searched on symbol
        setInput("");

        // Removes the dropdown list when searching
        setMatches([]);
    };

    return (
        <form onSubmit={handleSubmit} style={styles.container}>
            <div style={styles.wrapper}>
                <input
                    style={styles.input}
                    type="text"
                    placeholder="Enter stock symbol (e.g. MSFT, IBM)..."
                    value={input}
                    onChange={handleChange}
                />

                {matches.length > 0 && (
                    <div style={styles.dropdown}>
                        {matches.map((m) => (
                            <div key={m["symbol"]} style={styles.item} onClick={() => handleSelect(m["symbol"])}>
                                <strong>{m["symbol"]}</strong> - {m["name"]}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <button type="submit" style={styles.button}>
                Search
            </button>
        </form>
    );
};

const styles = {
    container: {
        position: "relative",
        display: "flex",
        gap: "1em",
        width: "100%"
    },
    input: {
        width: "100%",
        padding: "0.75em",
        fontSize: "1rem",
        borderRadius: "0.5em",
        border: "1px solid #ccc"
    },
    button: {
        padding: "0.75em 1.5em",
        fontSize: "1rem",
        borderRadius: "0.5em",
        cursor: "pointer"
    },
    item: {
        padding: "0.6em",
        cursor: "pointer"
    },
    dropdown: {
        position: "absolute",
        top: "100%",
        width: "100%",
        left: 0,
        right: 0,
        background: "white",
        border: "1px solid #ccc",
        maxHeight: "200px",
        overflowY: "auto",
        zIndex: 100,
        borderRadius: "0.5em"
    },
    wrapper: {
        position: "relative",
        flex: 1
    }
}