import React from "react";
import TrendingVideo from "./TrendingVideo";
import "./Trending.css";

const Trending = () => {
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
            >
              View More Videos
            </button>
          </div>
        </div>
        <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 p-3 justify-content-center">
          <TrendingVideo
            title="SZA - Good Days (Audio)"
            publisher="SZA"
            views="94.2M"
            vertifcation={true}
            video="https://www.youtube.com/embed/0BdlKkvjEgA?si=GZ-plCUXyhwSLBee"
            img="https://yt3.googleusercontent.com/_W2XMP5_R2HP_WXN958k-K2bHvfm69ixeP_2Tfrfg9QxuPOREoMztZ8QGIwhs_7QkhuDoi1K-ho=s176-c-k-c0x00ffffff-no-rj-mo"
          />
          <TrendingVideo
            title="Inside Out 2 | Teaser Trailer"
            publisher="Pixar"
            views="13.6M"
            vertifcation={true}
            video="https://www.youtube.com/embed/VWavstJydZU?si=vFesPMhq7dXN33_s"
            img="https://yt3.ggpht.com/Kgf_a0N0SJh5L4vDObO7LmkmYVRw4ZWVZe8IpIdQzLDlIuAP311ibA4oquZur-u-3JU0eU3riQ=s176-c-k-c0x00ffffff-no-rj-mo"
          />
          <TrendingVideo
            title="rain"
            publisher="JackStauber"
            views="6.3M"
            vertifcation={true}
            video="https://www.youtube.com/embed/osxJ5-_Ccp0?si=vgd5ZzoUekbNL3YW"
            img="https://yt3.googleusercontent.com/ytc/AIf8zZRApDEpu8yUdwvRGA-k5fw-FeWsUiZwj-ykBWAbKg=s176-c-k-c0x00ffffff-no-rj-mo"
          />
          <TrendingVideo
            title="Social Media Stalking - Emma Chamberlain Anything Goes Podcast"
            publisher="Anything Goes"
            views="119.8K"
            vertifcation={false}
            video="https://www.youtube.com/embed/-B4Ge9AvSB0?si=XP1MObAVwJsOTU3i"
            img="https://yt3.ggpht.com/evL7R02ei7JMnF5tnCSIyrcQprfD8Gs5f_q-XFURhW-RN11KSCsuTDISiDpJ7bWjanG4yj36bg=s176-c-k-c0x00ffffff-no-rj-mo"
          />
          <TrendingVideo
            title="My Love Mine All Mine"
            publisher="Mistki"
            views="23.4M"
            vertifcation={true}
            video="https://www.youtube.com/embed/Qy9LTRu89FA?si=3kH20mSfI2rHI-Fv"
            img="https://yt3.googleusercontent.com/w23P-nr7I2D7Qjb8UhGEQIl-TWJpxjXmuHuqOam8WjSHsFWn0TUe3CtUr3d-At4C0Eog5gUrIg=s176-c-k-c0x00ffffff-no-rj"
          />
          <TrendingVideo
            title="Steven Goes On An Adventure | Steven Universe | Cartoon Network"
            publisher="Steven Universe"
            views="17.0M"
            vertifcation={true}
            video="https://www.youtube.com/embed/qDOe1w6m3nE?si=RCFo3m7VKV_pkv_7"
            img="https://yt3.googleusercontent.com/ytc/AIf8zZRmd_DNAoFFZ6b55y6I24xEp8r-K04qlE9__xvEQQ=s176-c-k-c0x00ffffff-no-rj"
          />
          <TrendingVideo
            title="Drake - Yebbas Heartbreak (Audio)"
            publisher="Drake"
            views="55.3M"
            vertifcation={true}
            video="https://www.youtube.com/embed/9rlW2rUzyn0?si=yWhOerP8mgZzVDYM"
            img="https://yt3.googleusercontent.com/ytc/AIf8zZTduSBd8IvAZlWvkOpmwKmZ0lRXlJDigO7Ys56mmQ=s176-c-k-c0x00ffffff-no-rj-mo"
          />
          <TrendingVideo
            title="KUNG FU PANDA 4 | Official Trailer"
            publisher="Universal Pictures"
            views="11M"
            vertifcation={true}
            video="https://www.youtube.com/embed/_inKs4eeHiI?si=mPaW5buYqNII5Yfn"
            img="https://yt3.googleusercontent.com/_xmrueXlQyPmO379bSt2BjirLWXxNOUoQn1jV0DpOlxxeCGlx9Z2L9HxfoWMgdsdIyGFh17W1A=s176-c-k-c0x00ffffff-no-rj"
          />
        </div>
      </div>
    </section>
  );
};

export default Trending;
