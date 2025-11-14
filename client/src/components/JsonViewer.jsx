export default function JsonViewer({ data }) {
    return (
        <div style={styles.container}>
            <pre style={styles.pre}>
                {data ? JSON.stringify(data, null, 2) : "Enter a symbol in the search bar to show data"}
            </pre>
        </div>
    );
}

const styles = {
  container: {
    backgroundColor: "#f8f9fa",
    padding: "15px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    height: "400px",
    overflowY: "scroll",
  },
  pre: {
    margin: 0,
    fontSize: "14px",
    fontFamily: "monospace",
  },
};