


//import './App.css';
import Comment from './components/Comment Section/Comment.js';
import Footer from './components/FooterOne/Footer.js';
import Header from './components/Header/Header.js';
import Music from './components/Music/Music.js';
import Navbar from './components/NavBarPostVideo/Navbar.js';
import NavbarSingleVideo from './components/NavbarSingleVideo/NavbarSingleVideo.js';
import Trailers from './components/Trailers/Trailers.js';
import Trending from './components/Trending/Trending.js';




function App() {
  return (

    <div className="App">
      <NavbarSingleVideo/> 
      <Header/>
      <Trending/>
      <Footer/>
    </div>
  );
}

export default App;
