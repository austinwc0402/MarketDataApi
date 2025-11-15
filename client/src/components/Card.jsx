export default function Card({ day, averageLow, averageHigh, volume }) {

  return (
    <div style={styles.card}>
      <h3 style={styles.day}>{day}</h3>
      <p style={styles.value}>Low avg: {averageLow.toFixed(4)}</p>
      <p style={styles.value}>High avg: {averageHigh.toFixed(4)}</p>
      <p style={styles.value}>Volume: {volume}</p>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "2px 6px rgba(0,0,0,0.1)",
    marginBottom: "12px"
  },
  day: {
    fontSize: "1.2em",
    fontWeight: "bold",
    marginBottom: "8px"
  },
  value: {
    margin: "3px 0"
  }
};