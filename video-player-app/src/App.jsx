import { useRef } from "react";

function App() {
  const videoRef = useRef(null);

  const playVideo = () => {
    videoRef.current.play();
  };

  const pauseVideo = () => {
    videoRef.current.pause();
  };

  const forwardVideo = () => {
    videoRef.current.currentTime += 5;
  };

  const rewindVideo = () => {
    videoRef.current.currentTime -= 5;
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Custom Video Player using useRef</h2>

      {/* Video link */}
      <video
        ref={videoRef}
        width="400"
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />

      {/* Control buttons */}
      <div style={{ marginTop: "10px" }}>
        <button onClick={playVideo}>▶️ Play</button>
        <button onClick={pauseVideo}>⏸ Pause</button>
        <button onClick={forwardVideo}>⏩ Forward</button>
        <button onClick={rewindVideo}>⏪ Rewind</button>
      </div>

      <div
        style={{
          border: "3px solid #f0eaeaff",
          padding: "5px",
          marginTop: "10px",
         backgroundColor: "#89ba15ff",
        }}
      >
        <h3>Observation</h3>
        <p>
          Clicking Play, Pause, Forward, or Rewind does not change any React
          state and does not change the video source, but the video behavior
          still changes.
        </p>
        <p>
          This happens because the video is controlled using the useRef hook.
          useRef directly accesses the DOM element and does not cause
          re-rendering. This proves that not all UI behavior in React requires
          state.
        </p>
      </div>
    </div>
  );
}

export default App;
