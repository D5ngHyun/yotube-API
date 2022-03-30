import React from 'react';
import Video_item from '../video_item/Video_item';
import styles from './Video_list.module.css';

function Video_list(props) {
  return (
    <ul className={styles.videos}>
      {props.videos.map((video) => (
        // eslint-disable-next-line react/jsx-pascal-case
        <Video_item video={video} key={video.id} />
      ))}
    </ul>
  );
}

export default Video_list;
