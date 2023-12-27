import React from 'react';
import Card from './Card';
import Comment from '../Comment Section/Comment'

import { useFireBase } from '../../FireBase/useFireBase';

const VideoPage = (props) => {

  const { items } = useFireBase(props.id.Collectionname);

  if (!items || items.length === 0) {

    return <div>Loading...</div>; 
  }
  
  return (
    <div className="container mt-5">
    <div className="row">
        
        <Card
          key={props.id.ID}
          ID={props.id.ID}
          dataVideo={items[props.id.ID].video}
          title={items[props.id.ID].title}
          views={items[props.id.ID].views}
          personalPhoto={items[props.id.ID].pImage}
          publisher={items[props.id.ID].publisher}
          check={items[props.id.ID].verification}
          Views={items[props.id.ID].views}
          like={items[props.id.ID].likes}

        />
        


    </div>
    </div>
  );
};

export default VideoPage;
