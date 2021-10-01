import React from 'react';

const Video_item = (props) => 
<li>
    <img src={props.video.snippet.thumbnails.medium.url} art="video thumbail"></img>

</li>;

export default Video_item;