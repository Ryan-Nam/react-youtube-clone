import React from 'react';
import styles from './video_item.module.css';
// Deconstructing
const Video_item = ({video : {snippet}}) => (
<li className={styles.constainer}>
    <div className={styles.video}>
        <img className={styles.thumbnail} src={snippet.thumbnails.medium.url} art="video thumbail"></img>
    {/* meta data */}
    <div className={styles.metadata}>
        <p className={styles.title}>{snippet.title}</p>
        <p className={styles.channel}>{snippet.channelTitle}</p>
    </div>
    </div>
</li>

);

export default Video_item;