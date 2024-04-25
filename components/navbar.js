import styles from "/styles/navbar.module.css";
import Link from "next/link";
import { useEffect } from "react";

export default function NavBar() {
  return <div className={styles.navcontainer} id={"nav"}>
    <ul>
      <Link href="/about">About</Link>
      <Link href="/">Home</Link>
    </ul>
  </div>;
}
