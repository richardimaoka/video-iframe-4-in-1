import styles from "./page.module.css";
import Header from "../components/Header";
import Article from "../components/Article";
import Link from "next/link";

export default function Page() {
  return (
    <div className={styles.component}>
      <Header />
      <Link href="/">home</Link>
      <Article />
    </div>
  );
}
