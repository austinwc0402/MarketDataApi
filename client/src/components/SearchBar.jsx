import { useState } from "react";

export default function SearchBar({ onSearch }) {
    const [input, setInput] = useState("");

    const handleSubmit = () => {
        if (input.trim()) {
            onSearch(input.trim());
        }

        // Removes the searched on symbol
        setInput("");
    };

    return (
        <div style={styles.container}>
            <input
                style={styles.input}
                type="text"
                placeholder="Enter stock symbol (e.g. MSFT, IBM)..."
                value={input}
                onChange={(e) => setInput(e.target.value.toUpperCase())}
            />
            <button style={styles.button} onClick={handleSubmit}>
                Search
            </button>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        gap: "1em",
        width: "100%"
    },
    input: {
        flex: 1,
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
    }
}