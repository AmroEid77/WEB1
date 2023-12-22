/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import './Card.css';
import Comment from '../Comment Section/Comment';

const Card = (props) => {

    const [likedCount, setLikedCount] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [commnetN,setCommentNum]=useState(0)
    const handleLikeClick = () => {
      if (isLiked) {
        setLikedCount((prevCount) => prevCount - 1);
      } else {
        setLikedCount((prevCount) => prevCount + 1);
      }
      setIsLiked(!isLiked);
    };

  return (
    <div className="container">
      <div className="card col-12 ">
        <div className="card-body">
          <div className="player-wrapper">

            <ReactPlayer
              className="card-video"
              url={props.dataVideo}
              width="100%"
              height="100%"
            />
          </div>

          <div className="title-threedot">

            <p className="title">

              <a className="card-title musicTitle" 
                href={props.dataVideo} 
                title={props.title} 
                target="-blank"
              > 
              {props.title} 
              </a>

            </p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi-bi-three-dots"
              viewBox="0 0 16 16"
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
            </svg>

          </div>

          <div className="personalInformation">

            <img
              src={props.personalPhoto}
              title={props.publisher}
              alt="Profile"
            />
            <a className="personalName" title={props.publisher}>
              {props.publisher}
            </a>

            {props.check ? 
            (
            <div className="check">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-patch-check-fill"
                viewBox="0 0 16 16"
              >
                <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
              </svg>
            </div>
            
            ):""}
            
          </div>

            <div className="row ">
                <div className="footerOfVideo">
                  <dl className="buttonSeet">
                    <div className="col-md-6 col-sm-6 col-6 d-flex">
                      <dt className="Liked">
                        <button  className={`Liked-button ${isLiked ? 'liked' : ''}`}
                          onClick={handleLikeClick}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi-bi-hand-thumbs-up-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                          </svg>{' '}
                        Liked ({props.like})
                      </button>
                    </dt>

                    <dt className="Comments">
                      <button class="comment-button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi-bi-chat-text-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M4.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
                        </svg>{' '}
                        Comments ({commnetN})
                      </button>
                    </dt>

                    <dt className="Views">
                      <button class="Views-button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi-bi-eye-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                          <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                        </svg>{' '}
                        {props.views} Views
                      </button>
                      
                    </dt>

                </div>
                
          
                <div className="col-md-6 col-sm-6 col-6 text-end">
                  <dt className="Share">

                    <button class="Share-button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi-bi-arrow-90deg-left"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"
                        />
                      </svg>
                      Share (3k)
                    </button>

                  </dt>
                </div>
              </dl>
              
              <Comment videoID={props.ID} setCommnetNum={setCommentNum}/>
            </div>
          </div>

        </div>
      </div>
      
      
    </div>
  );
};

// export
export default Card;
