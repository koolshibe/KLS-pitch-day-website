import styles from "/styles/navbar.module.css";
import Link from "next/link";

export default function NavBar() {
  return <div className={styles.navcontainer} id={"nav"}>
    <ul>
      <Link href="/about">Register</Link>
      <Link href="/">Home</Link>
    </ul>
  </div>;
}
