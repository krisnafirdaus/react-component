import React from "react";
import Profile from "Component/Profile";
import Video from "Component/Video";
import Video2 from "Component/Video2";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Learning with Krisna</h1>
      <Profile />
      <div className="video">
        <Video />
      </div>
      <div className="video2">
        <Video2 />
      </div>
    </div>
  );
}

export default App;
