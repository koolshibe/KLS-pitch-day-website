import Head from 'next/head';
import Pagetop from '/components/pagetop.js';
import Layout from "/components/layout.js";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>KLS Pitch Day</title>
      </Head>
      <Pagetop></Pagetop>
    </Layout>
  );
}
