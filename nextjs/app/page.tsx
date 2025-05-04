import styles from "./page.module.css";
import Header from "./components/Header";
import Article from "./components/Article";
import { YouTubeReadiness } from "./components/YouTubeReadiness";

export default function Page() {
  return (
    <YouTubeReadiness>
      <div className={styles.component}>
        <Header />
        {/* <Link href="/about">about</Link> */}
        <Article />
      </div>
    </YouTubeReadiness>
  );
}
