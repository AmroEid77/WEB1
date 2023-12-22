import React from 'react'
//import NavbarSingleVideo from '../components/NavbarSingleVideo/NavbarSingleVideo'
import Navbar from '../components/NavBarPostVideo/Navbar'
import Header from '../components/Header/Header'
import Trending from '../components/Trending/Trending'
import Music from '../components/musicVideo/Music'
import Footer from '../components/FooterOne/Footer'
import Trailers from '../components/Trailers/Trailers'
import CardVideos from '../components/RelatedVideo/CardVideos'

const HomeVideo = () => {
return (
    <>
    <Navbar/>
    <Header/>
    <Trending/>
    <Trailers/>
    <Music/>
    <CardVideos/>
    <Footer/>
    </>
    
)
}

export default HomeVideo