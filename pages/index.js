import Head from 'next/head';
import Pagetop from '/components/pagetop.js';
import NavBar from '/components/navbar.js';
import Layout from "/components/layout.js";
import AboutText from "/components/abouttext.js";
import { useEffect } from "react";
import { refresh } from "/Utils/anims.js";
import { navScroll } from "/Utils/anims.js";


export default function Home() {
  useEffect (() => {
    refresh();
    navScroll();
  }, []);
  return (
    <Layout>
      <Head>
        <title>KLS Pitch Day</title>
      </Head>
      <NavBar></NavBar>
      <Pagetop></Pagetop>
      <AboutText></AboutText>
    </Layout>
  );
}
