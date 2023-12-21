import CardVideo from './CardVideo';
import { useFireBase } from '../../FireBase/useFireBase';
import React from 'react';

const Music = () => {
const { items } = useFireBase('musicVideo');

return (
    <div className="container">
    <h1>Music</h1>
    <div className="row row-cols-1 row-cols-md-3 g-4">
        {items.map((video) => (
        <CardVideo
            
            dataVideo={video.dataVedeo}
            title={video.title}
            views={video.views}

        />
        ))}
    </div>
    </div>
);
};

export default Music;
