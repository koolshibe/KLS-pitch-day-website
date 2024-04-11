import styles from "/styles/pagetop.module.css";
import { useEffect } from "react";
import { testanim } from "/Utils/anims.js";

export default function Pagetop() {
  useEffect (() => {
    testanim();
  }, [])
  return (
    <section className={styles.section}>
        <h1 className={`${styles.boxtext} ${styles.h1} ${styles.bebasneue}`} id={"striped"}>Innovation</h1>
      <div>
        <h1 className={`${styles.h1} ${styles.bebasneue}`}>Innovation</h1>
      </div>
      <h2 className={styles.h2}>KLS Pitch Day</h2>
    </section>
  );
}
