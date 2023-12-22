import React from 'react'

import VideoPage from '../components/musicVideo/VideoPage'
import NavbarSingleVideo from '../components/NavbarSingleVideo/NavbarSingleVideo'
import RelatedVideo from '../components/RelatedVideo/RelatedVideo'


const SingleVideoPage = () => {
return (
    <>
    <NavbarSingleVideo/>
    <VideoPage />
    <RelatedVideo/>
    </>

    )
}

export default SingleVideoPage