import React from "react";
import styles from "./Article.module.css";
import YouTubeVideo from "./YouTubeVideo";
import YouTubeVideoQuad from "./YouTubeVideoQuad";

export default function Article() {
  return (
    <article className={styles.article}>
      <h2 className={styles.title}>
        Introducing recent developments in Chrome from the official YouTube
        videos.
      </h2>
      <div className={styles.content}>
        <p>
          Chrome continues to evolve at a rapid pace, bringing new features and
          improvements with each release. As a web developer or Chrome
          enthusiast, keeping up with these changes is essential for leveraging
          the latest capabilities and ensuring your projects remain compatible
          with the world's most popular browser.
        </p>
        <p>
          Their YouTube channel has been covering all the important Chrome
          updates through the comprehensive video series. In this blog post,
          we'll introduce you to recent videos covering Chrome's Q1 2025
          releases, followed by "New in Chrome" updates for the versions 131,
          130, 129, and 128, highlighting the most significant changes and
          features you need to know about.
        </p>
        <h3>New in Chrome Q1 2025: The Big Picture</h3>

        <YouTubeVideo videoId="-s8XdFyIEeM" />

        <p>
          The new in Chrome Q1 2025 video provides a comprehensive overview of
          the transformative changes that landed in Chrome during the first
          quarter of 2025. This quarter has been particularly exciting, with
          major advancements
        </p>
        <blockquote className={styles.blockquote}>
          "The best way to predict the future is to invent it." - Alan Kay
        </blockquote>

        <p>
          If you're looking for the executive summary of Chrome's direction in
          early 2025, this video is your perfect starting point before diving
          into the specific version updates.
        </p>

        <h3>Four videos in a row</h3>

        <p>
          Then, how does it look when I align four videos in a row as follows?
          These are really interesting videos I want to introduce, so I don't
          want to omit any of them.
        </p>

        {/* <YouTubeVideo videoId="fSlNvBU-t38" />
        <YouTubeVideo videoId="_AERyyyBxWM" />
        <YouTubeVideo videoId="yuQcgiBsolQ" />
        <YouTubeVideo videoId="gpwdLX86wD8" /> */}

        {/* <YouTubeVideoQuad
          videoId1="fSlNvBU-t38"
          videoId2="_AERyyyBxWM"
          videoId3="yuQcgiBsolQ"
          videoId4="gpwdLX86wD8"
        /> */}

        <p>
          Since the videos occupy such a large portion of the article's visual
          space, I imagine displaying them this way in a blog post might feel
          overwhelming or awkward to readers. How can we address this visual
          imbalance? I want to keep all the videos intact, but present them in a
          more reader-friendly format. Is there a better approach to displaying
          these videos that would improve the overall aesthetic of the post?
        </p>

        <p>
          Since the videos occupy such a large portion of the article's visual
          space, I imagine displaying them this way in a blog post might feel
          overwhelming or awkward to readers. How can we address this visual
          imbalance? I want to keep all the videos intact, but present them in a
          more reader-friendly format. Is there a better approach to displaying
          these videos that would improve the overall aesthetic of the post?
        </p>

        <p>
          Since the videos occupy such a large portion of the article's visual
          space, I imagine displaying them this way in a blog post might feel
          overwhelming or awkward to readers. How can we address this visual
          imbalance? I want to keep all the videos intact, but present them in a
          more reader-friendly format. Is there a better approach to displaying
          these videos that would improve the overall aesthetic of the post?
        </p>
        <p>
          Since the videos occupy such a large portion of the article's visual
          space, I imagine displaying them this way in a blog post might feel
          overwhelming or awkward to readers. How can we address this visual
          imbalance? I want to keep all the videos intact, but present them in a
          more reader-friendly format. Is there a better approach to displaying
          these videos that would improve the overall aesthetic of the post?
        </p>
      </div>
    </article>
  );
}
