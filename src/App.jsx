import logo from './logo.svg';
import './App.css';
import Info from './components/Info';
import Nav from './components/Nav';
import About from './components/About';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';
//import Contact from './components/Contact';
import { BrowserRouter } from 'react-router-dom';
import Contact from './components/Contact';
import Socials from './components/Socials';

function App() {

  return (
    <BrowserRouter>
      <div className="bg-blue px-8 md:px-0 text-white">
        <Nav />
        <div className="space-y-36 md:space-y-0">
          <Info />
          <div id="about">
            <About />
          </div>
          <div id="pricing">
            <Pricing />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;