import React from 'react';
import ReactPlayer from 'react-player';
  import './Card-view.css'
const CardVideo = (props) => {
  const { playVideo } = props;

  // Check if there is an image
  if (!props.img) {
    return null; // Return null to skip rendering the card if there is no image
  }

  const openYouTubeVideo = (videoID) => {
    window.open(`https://www.youtube.com/watch?v=${videoID}`);
  };

  return (
    <div className="related-videos">  
      <div className="card row-md-3 mx-3 my-3">
        <div className="card-image-container" id={props.videoID} onClick={() => playVideo(props.videoID)}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${props.videoID}`}
            playing={false}
            controls
            width="100%"
            height="100%"
            style={{
              borderRadius: 'var(--bs-border-radius) var(--bs-border-radius) 0 0',
              overflow: 'hidden',
            }}
          />
        </div>

        <div className='video-title-views'>
          {/* Use white-space: nowrap to ensure the name is on a single line */}
          <div className="card-title-container" style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
            <img
              src={props.imge}
              alt={props.names}
              style={{
                borderRadius: '50%', // Set border-radius to 50% for a circular shape
                width: '20px', // Set the width of the circular image
                height: '20px', // Set the height of the circular image
                marginRight: '10px', // Adjust margin if needed
              }}
            />
            <p className="card-title">{props.names}</p>
            <span className="icon" style={{ marginLeft: '10px' }}>
              <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
              </svg>
            </span>
          </div>

          <p className="views-Desc">{props.views}</p>
        </div>

        <div className="card-description">
          <p className="card-des">{props.desc}</p>
        </div>

        <div className='timeDesc'>
          <span className='time'>{props.time}</span>
          <span className='time'>{props.times}</span>
        </div>
        
        <div className='button-des'>
          <button className="card-btn" onClick={() => playVideo(props.videoID)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 384 512" strokeWidth="0" fill="currentColor" stroke="currentColor">
              <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
            </svg>
            <span className="card-btn-text">Watch Video</span>
          </button>
          <button className='Open-btn' onClick={() => openYouTubeVideo(props.videoID)}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardVideo;
