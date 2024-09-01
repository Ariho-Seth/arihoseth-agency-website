import './App.css';
import { Header, Footer, HelpUs } from './components/MainSections';
import { BrowserRouter as Routers, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { TalkBusiness } from './pages/TalkBusiness';

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
      <button className="navigationButton">Menu</button>
      <div className="navigationAnchor">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Services">Services</Link>
        <Link to="/TalkBusiness">Talk Business</Link>

      </div>

    </div>
  )
}



