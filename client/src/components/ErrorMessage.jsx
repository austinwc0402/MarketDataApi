export default function ErrorMessage({ error }) {
    return(
        <div>
            <p>{error}</p>
        </div>
    );
};

const [styles] = {
    message: {
        color: "#e90a0aff"
    }
};