import './App.css';
import { SlGraph } from "react-icons/sl";
import { BrowserRouter as Routers, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { TalkBusiness } from './pages/TalkBusiness';
import { MdBusinessCenter, MdDesignServices } from "react-icons/md";
import { FaInfoCircle, FaHome  } from "react-icons/fa";
import { RequestService } from './pages/RequestService';
import { FaInstagramSquare, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { Privacy } from './pages/PrivacyPolicy';



function App() {
  return (
    <div className="App">
      <Navigator  />
     

    </div>
  );
}
export default App;
// this is the Navigation link componet.
// I made it a component because I thought i was gotta be calling it in the other classes/ compnets i wanted to have it 

const Navigator = () => {
 
  return (
    <div className="navigator">

      <Routers>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/TalkBusiness" element={<TalkBusiness />} />
          <Route path='/RequestService' element={<RequestService />} />
          <Route path='/PrivacyPolicy' element={<Privacy />} />
        </Routes>

      </Routers>
    </div>
  )

}




export const Header = () => {
  return (

      <div className="header-Section" >
          <div className='headerOverlay'></div>
        <div className='left-header'>
         <div className="main-title"> Ariho Seth Agency</div>
          <div className="motto"> Scale Your business <SlGraph /></div>
          </div>

        <div className='right-header'>
        
          
          <div className="navigationAnchor" >
                  
                  <div className='business'>
                          <div id='main'> Ariho Seth Agency</div>
                          <div id='motto'> Scale Your business </div>
                  </div>
                  <div className='links'>
                    
                          <Link to="/"> <FaHome  /> Home</Link>
                          <Link to="/About"> <FaInfoCircle /> About</Link>
                          <Link to="/Services"> <MdDesignServices /> Services</Link>
                          <Link to="/TalkBusiness"> <MdBusinessCenter /> Talk Business</Link>
                  </div>
                  <div className='logos'>
                    <div className='logo-overlay'></div>
                    <Link to="http://linkedin.com/in/atwijukire-ariho-seth-4a7a38259" target='blank' >  <FaLinkedin /> </Link>
                    <Link to="https://www.instagram.com/ariho_seth?igsh=eWVxM3gxazY4Nnk5&utm_source=qr" target='blank' > <FaInstagramSquare /> </Link>
                    <Link to="https://www.facebook.com/rodriguez.costa.56?mibextid=LQQJ4d" target='blank' > < FaFacebook /> </Link>
                    <Link to="/" target='blank' ><IoIosMail /></Link>
                    <Link to="https://x.com/ariho_seth18?s=21" target='blank'>< FaXTwitter/></Link>
                  
                  </div>
              </div>
           </div>
      </div>

      
  )
}


