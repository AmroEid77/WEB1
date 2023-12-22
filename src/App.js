
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeVideo from './pages/HomeVideo.js';
import SingleVideoPage from './pages/SingleVideoPage.js';



function App() {
  return (

    <BrowserRouter>
    <Routes>   
      <Route path="/HomeVideo" element={<HomeVideo/>}/>   
      <Route path="/SingleVideoPage" element={<SingleVideoPage/>}/>   
      <Route index element={<HomeVideo/>} />  
    </Routes> 
    </BrowserRouter>
  );
}

export default App;
