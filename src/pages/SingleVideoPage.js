import React from 'react'

import VideoPage from '../components/musicVideo/VideoPage'
import NavbarSingleVideo from '../components/NavbarSingleVideo/NavbarSingleVideo'
import RelatedVideo from '../components/RelatedVideo/RelatedVideo'
import { useParams } from 'react-router-dom'


const SingleVideoPage = () => {
    const Id = useParams('ID')
return (
    <>
    <NavbarSingleVideo/>
    <VideoPage id={Id}/>
    <RelatedVideo/>
    </>

    )
}

export default SingleVideoPage