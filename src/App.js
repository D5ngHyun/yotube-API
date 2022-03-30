import React, { useEffect, useState } from "react";
import Video_list from "./components/video_list/Video_list";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&maxResults=25&chart=mostPopular&key=AIzaSyBoDGlkHZOcgcKcAv4MQ4OLjanPGi0W48g",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Video_list videos={videos} />;
    </>
  );
}

export default App;
