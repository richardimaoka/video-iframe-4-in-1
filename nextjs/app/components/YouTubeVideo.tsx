"use client";

import React, { useState } from "react";
import styles from "./YouTubeVideo.module.css";

interface YouTubeVideoProps {
  videoId: string;
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function YouTubeVideo({ videoId }: YouTubeVideoProps) {
  const [i, setI] = useState(1);

  if (typeof window !== "undefined") {
    window.onYouTubeIframeAPIReady = function () {
      console.log("onYouTubeIframeAPIReady called");
    };
  }

  return (
    <div>
      <div className={styles.component}>
        <iframe
          className={styles.videoFrame}
          src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
      <button
        onClick={() => {
          setI(i + 1);
        }}
      >
        {i}
      </button>
    </div>
  );
}
