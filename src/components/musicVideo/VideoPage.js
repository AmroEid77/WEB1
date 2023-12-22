import React from 'react';
import Card from './Card';
import Comment from '../Comment Section/Comment'

import { useFireBase } from '../../FireBase/useFireBase';

const VideoPage = (props) => {

  const { items } = useFireBase('trending');

  if (!items || items.length === 0) {

    return <div>Loading...</div>; 
  }
  
  return (
    <div className="container mt-5">
    <div className="row">

      {console.log(props.id.ID)}
        <Card
          key={props.id.ID}
          dataVideo={items[props.id.ID].video}
          title={items[props.id.ID].title}
          views={items[props.id.ID].views}
          personalPhoto={items[props.id.ID].pImage}
          publisher={items[props.id.ID].publisher}
          check={items[props.id.ID].verification}
          Views={items[props.id.ID].views}

        />
        <Comment 
        videoID={props.id.ID}
        />


    </div>
    </div>
  );
};

export default VideoPage;
