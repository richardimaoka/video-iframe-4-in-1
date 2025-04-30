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
        src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
  );
}
