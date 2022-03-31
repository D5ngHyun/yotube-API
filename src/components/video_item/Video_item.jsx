import React from 'react';
import styles from './Video_item.module.css';

function Video_item({ video, onVideoClick, display }) {
  // console.log(video);
  const displayType = display === 'list' ? styles.list : styles.grid;
  const { snippet } = video;

  return (
    <li
      className={`${styles.container} ${displayType}`}
      onClick={() => onVideoClick(video)}
    >
      <div className={styles.video}>
        <img
          className={styles.thumbnail}
          src={snippet.thumbnails.medium.url}
          alt="video thumbnail"
        />
        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
}

export default Video_item;
