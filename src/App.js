import React, { useEffect, useState } from 'react';
import Search_header from './components/search_header/Search_header';
import Video_list from './components/video_list/Video_list';
import styles from './App.module.css';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  return (
    <>
      <div className={styles.app}>
        <Search_header onSearch={search} />
        <Video_list videos={videos} />;
      </div>
    </>
  );
}

export default App;
