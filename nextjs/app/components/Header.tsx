import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>My Blog</h1>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="/">Home</a>
            </li>
            <li className={styles.navItem}>
              <a href="/about">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
