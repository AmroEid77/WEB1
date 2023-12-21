


//import './App.css';
import Footer from './components/FooterOne/Footer.js';
import Header from './components/Header/Header.js';
import Navbar from './components/NavBarPostVideo/Navbar.js';
import NavbarSingleVideo from './components/NavbarSingleVideo/NavbarSingleVideo.js';
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
