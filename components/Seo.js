import Head from "next/head";

export default function Seo({ title }) {
  return (
    <Head>
      <title>AWESOME FOOD STORE | {title}</title>
    </Head>
  );
}
