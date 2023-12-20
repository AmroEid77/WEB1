import React from 'react';
 

const VideoCard = ({ video, playVideo, playVideoOnYouTube }) => {

  return (
    <div className="card col-md-3 mx-3 my-3">
      {/* Your card content */}
      <div className="card-image-container" id={video.videoID}>
        <img className='imgClass'  src={video.img} />
        
      </div>
      <div className='video-title-views'>
      <span className="icon1"></span>
        <p className="card-title">{video.names}</p>
        <span className="icon">
						<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0h24v24H0z" fill="none"></path>
							<path fill="currentColor" d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
						</svg>
					</span>
        <p className="views-Desc">{video.views}</p>
      </div>
        
      <p className="card-des">{video.desc}</p>
      <div className='timeDesc'>
        <span className='time'>{video.time}</span>
        <span className='time '>{video.times}</span>
      </div>

      
       <div className='button-des'>
         <button className="card-btn" onClick={() => playVideo(video.videoID)}>
         <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 384 512" strokeWidth="0" fill="currentColor" stroke="currentColor">
           <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"></path>
         </svg>
         <span className="card-btn-text"  >Watch Video</span>
       </button>
       <button className='Open-btn' onClick={() => playVideoOnYouTube(video.videoID)}>
       <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/>
        </svg>
        </button>
       </div>





      
    </div>
  );
};



export default VideoCard;
