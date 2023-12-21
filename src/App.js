

//import './App.css';
import Footer from './components/FooterOne/Footer.js';
import NavbarSingleVideo from './components/NavbarSingleVideo/NavbarSingleVideo.js';
import Trailers from './components/Trailers/Trailers.js';
import Trending from './components/Trending/Trending.js';



function App() {
  return (

    <div className="App">
      <NavbarSingleVideo/>
      <Trending/>
      <Trailers />
      <Footer/>
    </div>
  );
}

export default App;
