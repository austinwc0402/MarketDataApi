export default function ErrorMessage({ error }) {
    return(
        <div style={styles.container}>
            <p style={styles.message}>&#x274C; {error}</p>
        </div>
    );
};

const styles = {
    message: {
        color: "#e90a0aff",
        font: "strong"
    },
    container: {
        background: "#f3babaff",
        border: "3px solid #e90a0aff",
        borderRadius: "10px",
        padding: "5px 10px"
    }
};