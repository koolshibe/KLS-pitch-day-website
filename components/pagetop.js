import styles from "/styles/pagetop.module.css";
import { useEffect } from "react";
import { stripeScroll } from "/Utils/anims.js";
import { mouseScroll } from "/Utils/anims.js";
import { atScroll } from "/Utils/anims.js";
import { Svg } from "/components/atsymbol.js";

export default function Pagetop() {
  useEffect (() => {
    stripeScroll();
    mouseScroll();
    atScroll();
  }, [])
  return (
    <section className={styles.section}>
      <h6>Scroll</h6>
      <h1 className={`${styles.h1} ${styles.bebasneue}`} id={"striped"}>Innovate</h1>
      <Svg></Svg>
    </section>
  );
}
