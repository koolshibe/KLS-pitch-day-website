import styles from "/styles/pagetop.module.css";
import { useEffect } from "react";
import { stripeScroll } from "/Utils/anims.js";
import { textScroll } from "/Utils/anims.js";
import { svg } from "/components/atsymbol.js";

export default function Pagetop() {
  useEffect (() => {
    stripeScroll();
  }, [])
  return (
    <section className={styles.section}>
      <h1 className={`${styles.h1} ${styles.bebasneue}`} id={"striped"}>Innovate</h1>
      <h2 className={`${styles.h2} ${styles.prataregular}`}>KLS Pitch Day</h2>
    </section>
  );
}
