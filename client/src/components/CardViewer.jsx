import Card from "./Card";

export default function CardViewer({ summaries }) {
  if (!summaries || summaries.length === 0) {
    return (
      <div style={styles.container}>
        <p>No data available</p>
      </div>
    );
  }

  return (
      <div style={styles.container}>
          {summaries.map((item, index) => (
            <Card
              key={index}
              day={item.day}
              averageLow={item.lowAverage}
              averageHigh={item.highAverage}
              volume={item.volume}
            />
          ))}
      </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#eef2ff",
    padding: "15px",
    borderRadius: "8px",
    border: "1px solid #cbd5e1",
    height: "400px",
    overflowY: "auto"
  }
};