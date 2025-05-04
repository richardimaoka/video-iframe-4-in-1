"use client";

import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./YouTubeVideo.module.css";
import { YouTubeReadinessContext } from "./YouTubeReadiness";

interface YouTubeVideoProps {
  videoId: string;
}

export default function YouTubeVideo({ videoId }: YouTubeVideoProps) {
  const ytReady = useContext(YouTubeReadinessContext);
  const ref = useRef(null);
  const [player, setPlayer] = useState(null);

  function onStateChange(event: any) {
    console.log("on state change", event);
  }

  useEffect(() => {
    if (ytReady && ref.current) {
      // @ts-ignore YT is made available by <script src="https://www.youtube.com/iframe_api"></script>
      if (typeof YT !== "undefined") {
        console.log("creating a player", player);

        // @ts-ignore YT is made available by <script src="https://www.youtube.com/iframe_api"></script>
        const newPlayer = new YT.Player(
          // The first parameter specifies either the DOM element or the id of the HTML element
          // where the API will insert the <iframe> tag containing the player.
          ref.current,
          // Note that if you do write the <iframe> tag, then when you construct the YT.Player object,
          // you do not need to specify values for the width and height, which are specified as attributes of the <iframe> tag,
          //  or the videoId and player parameters, which are are specified in the src URL.
          {
            events: {
              onStateChange: onStateChange,
            },
          }
        );
        setPlayer(newPlayer);
      } else {
        throw new Error(
          "YT.Player not available even after onYouTubeIframeAPIReady() called!!"
        );
      }
    }
  }, [ytReady, ref, videoId]);

  return (
    <div>
      <div className={styles.component}>
        <iframe
          ref={ref}
          className={styles.videoFrame}
          src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1`}
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
