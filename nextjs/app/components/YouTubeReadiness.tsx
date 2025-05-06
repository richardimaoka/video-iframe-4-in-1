"use client";

import { createContext, ReactNode, useState } from "react";

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
  }
}

export const YouTubeReadinessContext = createContext(false);

type Props = {
  children: ReactNode;
};

export function YouTubeReadiness(props: Props) {
  const [ready, setReady] = useState(false);
  // console.log("YouTubeReadiness", ready);

  if (typeof window !== "undefined") {
    // https://developers.google.com/youtube/iframe_api_reference#Requirements
    // Defining onYouTubeIframeAPIReady is a requirement to use <script src="https://www.youtube.com/iframe_api"></script>
    window.onYouTubeIframeAPIReady = function () {
      setReady(true);
    };
  }

  return (
    <YouTubeReadinessContext value={ready}>
      {props.children}
    </YouTubeReadinessContext>
  );
}
