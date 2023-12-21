import CardVideo from './CardVideo';
import { useFireBase } from '../../FireBase/useFireBase';
import React from 'react';

const Music = () => {
  const { items } = useFireBase('musicVideo');

  return (
    <div className="container">

      <p className="trending fs-3 fw-bold mb-0">
        Music
      </p>
  
      <div className="row ">
        
        {items.map((video) => (

          <CardVideo 
            dataVideo={video.dataVedeo}
            title={video.title}
            views={video.views}
            videoDuration={video.videoDuration}
          />

        ))}
        
      </div>
    </div>
  );
};


export default Music;