import React, { useState } from "react";
import "./Trending.css";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";


const TrendingVideo = (props) => {
  const [play, setPlay] = useState(false);
  const [like, setLike] = useState(false);
  const handlePlay = () => {
    setPlay(!play);
  };
  const likeVideo = () => {
    setLike(!like);
  }

  return (

    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-2 p-2">
      <div className="card v-100 h-100">
        <div className="ratio ratio-16x9" style={{ position: 'relative' }}>
          {play && (
            <ReactPlayer url={props.video} playIcon playing={play} controls width="100%"
              height="100%" style={{
                borderRadius:
                  "var(--bs-border-radius) var(--bs-border-radius) 0 0", overflow: "hidden",
              }} />
          )} {!play && (
            <>
              <ReactPlayer url={props.video} playIcon playing={play} controls width="100%"
                height="100%" style={{
                  borderRadius:
                    "var(--bs-border-radius) var(--bs-border-radius) 0 0", overflow: "hidden",
                }} />
              <div className="thumbnail">
                <div className="playvideo" style={{ position: "absolute", opacity: 0, top: 70, left: 125 }}>
                  <button class="btn btn-outline-dark" onClick={handlePlay} style={{ width: "60px" }}>
                    &nbsp;
                  </button>
                </div>
                <div className="duration" style={{
                  position: "absolute", background:
                    'rgba(0, 0, 0, 0.5)', color: 'white', padding: '4px', fontSize: '0.8rem', bottom: '10px', left:
                    '10px', width: "fit-content", borderRadius: '5px'
                }}>
                  {props.duration}
                </div>
                <div className="like" style={{
                  position: 'absolute', bottom: '10px', right:
                    '10px'
                }}>
                  <button style={{
                    background: 'rgba(0, 0, 0, 0.5)', color: 'white', padding:
                      '1px 6px', borderRadius: '5px', border: "none"
                  }} onClick={likeVideo}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={like ?
                      "red" : "white"} className="bi bi-heart-fill" viewBox="0 0 16 16">
                      <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="card-body d-flex flex-column fs-xs fs-lg-5" style={{
          fontSize:
            "medium"
        }}>
          <Link to={`/SingleVideoPage/${props.ID}`} className="card-title trendingVideo fs-small fs-lg-5 fw-bold" title={props.title}
            style={{
              wordBreak: "break-word", textOverflow: "ellipsis", lineHeight:
                "1.2", cursor: "pointer", textDecoration: "none",
            }}>
            {props.title}
          </Link>
          <div className="mt-auto">
            <div className="publisher d-flex align-items-center">
              <button className="btn publisher-photo rounded-circle mr-5 mb-2" style={{
                backgroundColor: "#EEF0F2", width: 30, height: 30, padding: 0, marginLeft:
                  5, overflow: "hidden", position: "relative"
              }}>
                <img src={props.img} alt="Profile" style={{
                  width: "100%", height:
                    "100%", objectFit: "cover", position: "absolute", top: 0, left: 0,
                }} />
              </button>
              <div className="card-text fs-smaller mb-0 pb-0">
                <div className="publisher-name fw-bold" style={{ cursor: "pointer" }}>
                  &nbsp; {props.publisher} &nbsp; {props.verification ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#33BD88"
                      className="bi bi-patch-check-fill" viewBox="0 0 16 16">
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"
                      />
                    </svg>
                  ) : ("")}
                </div>
                <p className="text-muted mb-0">
                  &nbsp; {props.views} views
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default TrendingVideo; 