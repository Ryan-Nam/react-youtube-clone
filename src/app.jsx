import React, {useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);
  
  useEffect(()=> {
    // Fetch from Youtube API - i use postman
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDok2F1OTxu_JfJnQz2u9mducsHTrT5UHA", requestOptions)
      .then(response => response.json())  //text -> json : easy to see
      .then(result => setVideos(result.items)) // update component data
      .catch(error => console.log('error', error));
    //console.log('use Effect');
  }, []); 
  // - []: only called once when it is mounted.
  // -   (nothing): whenever 'props', 'state' is updated, call everytimes
  // - [video, name]: ]whenever these are updated, callback () will be called.

  return (
    <VideoList videos={videos}></VideoList>
  );
}

export default App;
