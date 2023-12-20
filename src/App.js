import { useState, useEffect } from "react";
import { collection, query, where, onSnapshot } from 'firebase/firestore';

import db from "./firebase";
import "./Card-view.css";
import VideoCard from './VideoCard';


function App() {
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [currentVideos, setCurrentVideos] = useState([]);

  useEffect(() => {
    // Fetch related videos from the database
    var relatedVideosdb = '12345'
    const unsubscribe = onSnapshot(collection(db, relatedVideosdb), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
   
        id: doc.id,
        ...doc.data(),
       
      }));
      setRelatedVideos(data);
      console.log(data)
    });

    return () => unsubscribe();
  }, []);

  const playVideo = (videoID) => {


    ///find the mine Div 
    var MainDiv =document.getElementById(videoID)
    //// create iframe to dispaly the video 
    const videoPlayer = document.createElement('iframe');
    videoPlayer.src = `https://www.youtube.com/embed/${videoID}?autoplay=1`;
    videoPlayer.frameBorder = '0';
    videoPlayer.allow = 'autoplay; encrypted-media';
    videoPlayer.allowFullScreen = true;
    videoPlayer.classList.add('iframeClass'); 

   ///// append the video to the main div 
    MainDiv.appendChild(videoPlayer);
    //// find the img video to be hide 
    var imgElement = MainDiv.getElementsByTagName("img")[0];
        imgElement.classList.add("d-none");
         ////find the parent of the mainDiv 
        var parentElement = MainDiv.parentElement
        
       var button= parentElement.getElementsByTagName("button")[0]
           button.classList.add("d-none");
    //document.body.appendChild(videoPlayer);


    try {
      const relatedVideosQuery = query(collection(db, 'relatedVideo'), where('fk', '==', videoID));
      
      const unsubscribe = onSnapshot(relatedVideosQuery, (snapshot) => {
        const relatedVideosData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log(relatedVideosData)
        setCurrentVideos(relatedVideosData);
      });
    
      
       
    } catch (error) {
      console.error('Error fetching related videos:', error.message);
    }


  };
  







  const playVideoOnYouTube = (videoID) => {
    window.open(`https://www.youtube.com/watch?v=${videoID}`);
  };
 
  
  return (
    <div className="container-fluid mt-5">
      <div className="related-videos">
        <h2 className="ml-3 mt-3">Related Videos</h2>
        <div className="video-grid list-unstyled col-12">
          <div className="row">
            {relatedVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                playVideo={playVideo}
                playVideoOnYouTube={playVideoOnYouTube}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="current-video row">
      {currentVideos.map((video) => (
          <div className="col-3" key={video.id}>
            <iframe className="iframeClass" allow='autoplay; encrypted-media' src={`https://www.youtube.com/embed/${video.VideoID}`} />
          </div>
      ))}
    </div>
    </div>
  );
}

 

export default App;