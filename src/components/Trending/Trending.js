import React, {useState} from "react";
import TrendingVideo from "./TrendingVideo";
import { useFireBase } from "../../FireBase/useFireBase";
import "./Trending.css";

const Trending = () => {

  const {items} = useFireBase("trending")
  const [button, setButton] = useState("View More Videos")
  const [vids, setVids] = useState(4);
  
  const viewMoreButton= ()=>{
    if(button==="View More Videos")
    {  setButton("View Less Videos");
      setVids(8);}
    else 
    {setButton("View More Videos");
    setVids(4);}
  }

  return (
    <section className="trendingVideos">
      <div className="container mt-3">
        <div className="row align-items-center">
          <div className="col-md-6 col-sm-6 col-6">
            <div className="trending-and-more">
              <p className="trending fs-3 fw-bold mb-0">Trending</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-6 text-end mt-md-0">
            <button
              type="button"
              className="btn view-more-trending btn-primary fw-bold"
              
              onClick={viewMoreButton}
            >
              {button}
            </button>
          </div>
        </div>
        <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 p-3 justify-content-center " >
          {
            items.slice(0,vids).map((item)=>{
              return(
                <TrendingVideo key={item.id} video={item.video} publisher={item.publisher} title={item.title} views={item.views} verification={item.verification} img={item.pImage} ></TrendingVideo>
              ) 
            }
                  )
          }
        </div>
      </div>
    </section>
  );
};

export default Trending;
