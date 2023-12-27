import { useEffect, useRef } from "react";
import Plyr from "plyr/src/js/plyr";
import Verified from "./Verified";
import './/Trailer.css'
import { Link } from "react-router-dom";
const Trailer = ({data}) => {

    const playerRef = useRef(null);

    useEffect(() => {
        
        if(playerRef.current) {

            // Change "{}" to your options: https://github.com/sampotts/plyr/#options
            const player = new Plyr(playerRef.current, {
                controls: [
                'play-large', // The large play button in the center
                'play', // Play/pause playback
                'progress', // The progress bar and scrubber for playback and buffering
                'duration', // The full duration of the media
                'mute', // Toggle mute
                'volume', // Volume control
                'settings', // Settings menu 
                'pip', // Picture-in-picture 
                'fullscreen', // Toggle fullscreen
                ] 
            }); 
            
        // Cleanup Plyr instance on component unmount
        return () => { 
        if (player && typeof player.destroy === 'function') {
            player.destroy();
        }
        };

    }}, [data.videoId]); 


    return(
        <div className="card" style={{maxWidth: "26rem" , minWidth: "300px", height: "100%"}}>
            <div style={{width: '100%'}}>
                <div ref={playerRef} id="player" data-plyr-provider="youtube" data-plyr-embed-id={data.videoId}></div>
            </div> 
            <div className="card-body text-start"> 

                <Link to={`/SingleVideoPage/trailers/${data.ID}`} className="fw-bold trailerTitle" style={{textDecoration: 'none', cursor: 'pointer'}}>
                    {data.title}
                </Link>
                
                <div className="d-flex align-items-center">
                    <img src={data.pImage} className="rounded-circle img-fluid mb-4" style={{ width: '30px', height: '30px' }}/>
                    <h6 className="mx-2 fw-bold">
                        {data.publisher} {data.verification && <Verified />}
                        <p className="fw-normal text-muted my-1">{data.views} views</p> 
                    </h6> 
                </div>  
            </div>
        </div>
    );
} 
    
export default Trailer;