
import { useFireBase } from '../../FireBase/useFireBase';
import React from 'react';
import CardVideos from './CardVideos';

const RelatedVideo = () => {
  const { items } = useFireBase('Task');

  return (
    <div className="container">
      <h1>Related Videos</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
     
        {items.map((video) => (
          
          <CardVideos
          
            desc={video.desc}
            img={video.img}
            names={video.names}
            imge={video.imge}
            time={video.time}
            times={video.times}
            videoID={video.videoID}
            views={video.views}
            
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedVideo;