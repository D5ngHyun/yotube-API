import React, { memo } from 'react';
import styles from './Video_item.module.css';

const Video_item = memo(({ video, onVideoClick, display }) => {
  const displayType = display === 'list' ? styles.list : styles.grid;
  const { snippet } = video;

  console.log('video Item');

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
});

export default Video_item;
