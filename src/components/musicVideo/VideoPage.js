import React from 'react';
import Card from './Card';
import Comment from '../Comment Section/Comment'
import { useFireBase } from '../../FireBase/useFireBase';

const VideoPage = () => {

  const { items } = useFireBase('trending');

  if (!items || items.length === 0) {

    return <div>Loading...</div>; 
  }
  
  return (
    <div className="container">
    <div className="row">
      {items.slice(0,1).map((item, index) => (
        <>
        <Card
          key={index}
          dataVideo={item.video}
          title={item.title}
          views={item.views}
          personalPhoto={item.pImage}
          publisher={item.publisher}
          check={item.verification}
          Views={item.views}

        />
        <Comment 
        videoID={item.ID}
        />
        </>
      ))}
    </div>
    </div>
  );
};

export default VideoPage;
