import Layout from "../components/Layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <link rel="stylesheet" href="https://unpkg.com/mvp.css"></link>
      <Component {...pageProps} />
    </Layout>
  );
}
