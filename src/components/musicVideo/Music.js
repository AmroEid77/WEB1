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
  
      <div className="row   row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 p-3 " >
        
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