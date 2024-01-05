export default function SomethingWentWrong() {
    return (
        <div style={{ textAlign: "center" }}>
            <h2>Something went wrong ...</h2>
            <h3>Try to reload page</h3>
            <button onClick={() => window?.location?.reload()}>Reload</button>
        </div>
    );
}
