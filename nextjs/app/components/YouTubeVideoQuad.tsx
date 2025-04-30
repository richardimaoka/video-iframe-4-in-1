import React from "react";
import styles from "./YouTubeVideoQuad.module.css";
import YouTubeVideo from "./YouTubeVideo";

interface YouTubeVideoQuadProps {
  videoId1: string;
  videoId2: string;
  videoId3: string;
  videoId4: string;
}

export default function YouTubeVideoQuad({
  videoId1,
  videoId2,
  videoId3,
  videoId4,
}: YouTubeVideoQuadProps) {
  return (
    <div className={styles.quadContainer}>
      <YouTubeVideo videoId={videoId1} />
      <YouTubeVideo videoId={videoId2} />
      <YouTubeVideo videoId={videoId3} />
      <YouTubeVideo videoId={videoId4} />
    </div>
  );
}
