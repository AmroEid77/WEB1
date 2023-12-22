import React, { useState } from 'react';
import ReactPlayer from 'react-player'

const CardVideo = (props) => {

    const [liked, setLiked] = useState(false);

    const handleLikeClick = () => {
        setLiked(!liked);
    };

    return (

        <div className=" col-lg-2 col-md-6 col-sm-6 mb-2 p-2">

            <div className="card v-100 h-100 "
                style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>

                <div className="ratio ratio-16x9"
                    style={{ borderRadius: '15px 15px 0 0', overflow: 'hidden' }} >

                    <ReactPlayer
                        url={props.dataVideo}
                        light={true}
                        playing={false}
                        controls
                        width="100%"
                        height="100%"
                    />

                </div>


                <div className="like-Duration" style={{ position: 'relative' }}>

                    <span className="Duration position-absolute" style={{
                        bottom: "10px",
                        left: "10px",
                        background: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        padding: '1px 6px',
                        fontSize: '1.1rem',
                        borderRadius: '10px'

                    }}>
                        {props.videoDuration}
                    </span>


                    <button
                        className={`btn position-absolute ${liked ? 'liked' : ''}`}
                        onClick={handleLikeClick}
                        style={{
                            bottom: "10px",
                            right: "10px",
                            background: 'rgba(0, 0, 0, 0.5)',
                            color: 'white',
                            padding: '1px 6px',
                            fontSize: '1.1rem',
                            borderRadius: '10px'
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill={liked ? "red" : "currentColor"}
                            className="bi bi-heart-fill"
                            viewBox="0 0 16 16"
                        >
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                        </svg>
                    </button>

                </div>

                <div className="card-body d-flex flex-column fs-xs fs-lg-5"
                    style={{ fontSize: "medium" }}>

                    <a
                        className="card-title fs-small fs-lg-5 fw-bold link-hover"
                        title={props.title}
                        href={props.dataVideo}
                        target="_blank" rel="noreferrer"
                    >
                        {props.title}
                    </a>

                    <div className="mt-auto">
                        <div className="publisher d-flex align-items-center">

                            <div className="card-text fs-smaller mb-0 pb-0">

                                <div className="publisher-name fw-bold"

                                    style={{ cursor: "pointer" }}
                                >
                                    &nbsp; {props.publisher} &nbsp;
                                    {props.verification ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1em"
                                            height="1em"
                                            fill="#33BD88"
                                            className="bi bi-patch-check-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                        </svg>
                                    ) : ("")}

                                </div>

                                <div className="views  ">

                                    <p className="text-muted  text-muted mb-0">
                                        &nbsp; {props.views}
                                    </p>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default CardVideo;