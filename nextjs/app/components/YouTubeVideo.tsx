"use client";

import React, { useEffect, useState } from "react";
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
  const [player, setPlayer] = useState(null);

  if (typeof window !== "undefined") {
    // https://developers.google.com/youtube/iframe_api_reference#Requirements
    // Defining onYouTubeIframeAPIReady is a requirement to use <script src="https://www.youtube.com/iframe_api"></script>
    window.onYouTubeIframeAPIReady = function () {
      console.log("onYouTubeIframeAPIReady called");
    };
  }

  useEffect(() => {
    // @ts-ignore YT is made available by <script src="https://www.youtube.com/iframe_api"></script>
    if (typeof YT !== "undefined") {
      console.log("creating a player");
      // The first parameter specifies either the DOM element or the id of the HTML element
      // where the API will insert the <iframe> tag containing the player.
    }
  }, []);

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
    </div>
  );
}
