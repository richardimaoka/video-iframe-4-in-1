import React, {
  CSSProperties,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./YouTubeVideo.module.css";
import { YouTubeReadinessContext } from "./YouTubeReadiness";
import { StateChange } from "./youtubeTypes";

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

interface YouTubeVideoProps {
  videoId: string;
  style?: CSSProperties;
  onStateChange?: (event: StateChange) => void;
}

export default function YouTubeVideo(props: YouTubeVideoProps) {
  const ytReady = useContext(YouTubeReadinessContext);
  const iframeRef = useRef(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (ytReady && iframeRef.current) {
      if (typeof window.YT !== "undefined") {
        // @ts-ignore YT is made available by <script src="https://www.youtube.com/iframe_api"></script>
        const newPlayer = new YT.Player(
          // The first parameter specifies either the DOM element or the id of the HTML element
          // where the API will insert the <iframe> tag containing the player.
          iframeRef.current,
          // Note that if you do write the <iframe> tag, then when you construct the YT.Player object,
          // you do not need to specify values for the width and height, which are specified as attributes of the <iframe> tag,
          //  or the videoId and player parameters, which are are specified in the src URL.
          {
            events: {
              onStateChange: props.onStateChange || undefined,
            },
            origin: "http://localhost:3000",
          }
        );
        setPlayer(newPlayer);
      } else {
        throw new Error(
          "YT.Player not available even after onYouTubeIframeAPIReady() called!!"
        );
      }
    }
  }, [ytReady, iframeRef, props.videoId]);

  return (
    <div className={styles.component} style={props.style}>
      <iframe
        ref={iframeRef}
        className={styles.videoFrame}
        src={`https://www.youtube.com/embed/${props.videoId}?enablejsapi=1&origin=http://localhost:3000`}
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
  );
}
