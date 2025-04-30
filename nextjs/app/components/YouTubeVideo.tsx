import React from "react";
import styles from "./YouTubeVideo.module.css";

interface YouTubeVideoProps {
  videoId: string;
}

export default function YouTubeVideo({ videoId }: YouTubeVideoProps) {
  return (
    <div className={styles.component}>
      <iframe
        className={styles.videoFrame}
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
