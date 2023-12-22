import CardVideo from './Components/CardVideo';
import { useFireBase } from './useFireBase';
import React from 'react';

const Musicc = () => {
  const { items } = useFireBase('Task');

  return (
    <div className="container">
      <h1>Related Videos</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
     
        {items.map((video) => (
          
          <CardVideo
          
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

export default Musicc;