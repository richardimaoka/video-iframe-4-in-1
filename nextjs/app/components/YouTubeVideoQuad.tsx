import React, { useState } from "react";
import styles from "./YouTubeVideoQuad.module.css";
import YouTubeVideo from "./YouTubeVideo";
import { PlayerState, StateChange } from "./youtubeTypes";

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
  const defaultPlayerStates: PlayerState[] = [
    "Not Playing",
    "Not Playing",
    "Not Playing",
    "Not Playing",
  ];
  const [states, setStates] = useState<PlayerState[]>(defaultPlayerStates);
  const playingVideoIndex = states.findIndex((x) => x === "Playing");

  function createPlayerStates(playingIndex: number): PlayerState[] {
    switch (playingIndex) {
      case 0:
        return ["Playing", "Not Playing", "Not Playing", "Not Playing"];
      case 1:
        return ["Not Playing", "Playing", "Not Playing", "Not Playing"];
      case 2:
        return ["Not Playing", "Not Playing", "Playing", "Not Playing"];
      case 3:
        return ["Not Playing", "Not Playing", "Not Playing", "Playing"];
      default:
        throw new Error(
          `error in createPlayerState. wrong playingIndex=${playingIndex}`
        );
    }
  }

  function stateChange(playerIndex: number, event: StateChange) {
    if (event.data === 1) {
      setStates(createPlayerStates(playerIndex));
    } else {
      setStates(defaultPlayerStates);
    }
  }

  const scalePercent100: React.CSSProperties = {
    zIndex: 1,
    transform: "scale(1.0)",
  };

  return (
    <div className={styles.container}>
      <YouTubeVideo
        videoId={videoId1}
        style={playingVideoIndex === 0 ? scalePercent100 : undefined}
        onStateChange={(event) => stateChange(0, event)}
      />
      <YouTubeVideo
        videoId={videoId2}
        style={playingVideoIndex === 1 ? scalePercent100 : undefined}
        onStateChange={(event) => stateChange(1, event)}
      />
      <YouTubeVideo
        videoId={videoId3}
        style={playingVideoIndex === 2 ? scalePercent100 : undefined}
        onStateChange={(event) => stateChange(2, event)}
      />
      <YouTubeVideo
        videoId={videoId4}
        style={playingVideoIndex === 3 ? scalePercent100 : undefined}
        onStateChange={(event) => stateChange(3, event)}
      />
    </div>
  );
}
