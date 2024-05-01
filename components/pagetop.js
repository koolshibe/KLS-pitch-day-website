import styles from "/styles/pagetop.module.css";
import { useEffect } from "react";
import { stripeScroll } from "/Utils/anims.js";
import { mouseScroll } from "/Utils/anims.js";
import { atScroll } from "/Utils/anims.js";
import { scrollTeller } from "/Utils/anims.js";
import { toRegister } from "/Utils/anims.js";
import { Svg } from "/components/atsymbol.js";

export default function Pagetop() {
  useEffect (() => {
    stripeScroll();
    mouseScroll();
    atScroll();
    scrollTeller();
    toRegister();
  }, [])
  return (
    <section className={styles.section}>
      <h6 className={`${styles.roboto} ${styles.simpletext}`} id={"teller"}>X- Scroll Or Tap -X</h6>
      <h1 className={`${styles.h1} ${styles.bebasneue}`} id={"striped"}></h1>
      <Svg></Svg>
      <h2 className={`${styles.h2} ${styles.prataregular}`} id={"register"}>KLS pitch day</h2>
    </section>
  );
}
