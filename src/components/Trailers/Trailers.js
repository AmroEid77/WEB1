import { useFireBase } from "../../FireBase/useFireBase";
import Trailer from "./Trailer";

const Trailers = () => {
    
    const { items } = useFireBase("trailers");


    // Specify the number of videos wanted for each row
    const numOfElements = 3;

    const firstRowVideos = items.slice(0, numOfElements);
    const secondRowVideos = items.slice(numOfElements, numOfElements*2);  


    return(
        <div className="container">
            <div className="d-flex justify-content-between">
                <h5 className="fw-bold d-inline-block ">Official Trailer</h5>
                <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">View more video</a>
            </div>

            <div className="row">
                {firstRowVideos.map((video) => (
                    <div className="col-lg-4 col-md-8 my-2"> 
                        <Trailer data={video}/>
                    </div>
                ))}
            </div>   
 
            <div className="collapse" id="collapseExample"> 
                <div className="row ">
                    {secondRowVideos.map((video) => (
                        <div className="col-lg-4 col-md-8 my-2"> 
                            <Trailer data={video}/>
                        </div>
                    ))}
                </div>
            </div>
           
        </div>
    ); 
}

export default Trailers;