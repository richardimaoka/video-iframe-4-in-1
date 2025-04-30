import styles from "./page.module.css";
import Header from "./components/Header";
import Article from "./components/Article";

export default function Page() {
  return (
    <div className={styles.component}>
      <Header />
      <Article />
    </div>
  );
}
