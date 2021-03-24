import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export function reportWebVitals(metric) {
    console.log("metric", metric);
}

export default MyApp;
