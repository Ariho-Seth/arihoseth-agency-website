import './App.css';
import { BrowserRouter as Routers, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home'; 
import { About } from './pages/About';
import { Services } from './pages/Services';
import { TalkBusiness } from './pages/TalkBusiness';




function App() {


  return (
    <div className="App">
      
      <Routers>
            <NavigationBar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/About" element={<About />} />
                  <Route path="/Services" element={<Services />} />
                  <Route path="/TalkBusiness" element={<TalkBusiness />} />
              </Routes>
          </Routers>
     
    </div>
  );
}





export default App;

export const NavigationBar=()=>{
  
  return(
    <div className="nav-links1">
           <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Services">Services</Link>
            <Link to="/TalkBusiness">Talk Business</Link>
            
    </div>
  )}

