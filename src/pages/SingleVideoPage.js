import React from 'react'

import VideoPage from '../components/musicVideo/VideoPage'
import NavbarSingleVideo from '../components/NavbarSingleVideo/NavbarSingleVideo'
import RelatedVideo from '../components/RelatedVideo/RelatedVideo'
import { Link, useParams } from 'react-router-dom'
import './Btn.css'

const SingleVideoPage = () => {
    const Id = useParams('ID')
    
return (
    <>
    <NavbarSingleVideo/>
    <VideoPage id={Id} />
    <RelatedVideo/>
    <div className='container d-flex flex-row-reverse'>
    <Link to="/HomeVideo" className="button btn ">
  Go back
</Link>
</div>

    </>

    )
}

export default SingleVideoPage