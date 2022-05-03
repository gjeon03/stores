import Layout from "../components/Layout";
import "../styles/scss/global.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
