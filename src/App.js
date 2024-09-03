import './App.css';
import { Header, Footer, HelpUs } from './components/MainSections';
import { BrowserRouter as Routers, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { TalkBusiness } from './pages/TalkBusiness';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBurger } from '@fortawesome/free-solid-svg-icons'
import { MdBusinessCenter, MdDesignServices } from "react-icons/md";
import { FaInfoCircle, FaHome  } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <Navigator />
     

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
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/TalkBusiness" element={<TalkBusiness />} />
        </Routes>

      </Routers>
    </div>
  )

}


export const NavigationBar = () => {

  return (
    <div className="navigation">
      <Header />
      <button className="navigationButton"><FontAwesomeIcon icon={faBurger} /></button>
      <div className="navigationAnchor" >
        <Link to="/"> <FaHome  /> Home</Link>
        <Link to="/About"> <FaInfoCircle /> About</Link>
        <Link to="/Services"> <MdDesignServices /> Services</Link>
        <Link to="/TalkBusiness"> <MdBusinessCenter /> Talk Business</Link>

      </div>

    </div>
  )
}



