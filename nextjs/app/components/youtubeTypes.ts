export type PlayerState = "Not Playing" | "Playing";

// https://developers.google.com/youtube/iframe_api_reference#onStateChange
export type StateChange = {
  data:
    | -1 // (unstarted)
    | 0 //YT.PlayerState.ENDED
    | 1 //YT.PlayerState.PLAYING
    | 2 //YT.PlayerState.PAUSED
    | 3 //YT.PlayerState.BUFFERING
    | 5; //YT.PlayerState.CUED
};
