import './App.css';
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './Components/NavBar';
import { Banner } from './Components/Banner';
import 'animate.css';
import WOW from 'wowjs';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';
import { Email } from './Email';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route  path="/home"  element={<Banner />}/>
          <Route  path="/skills"  element={<Skills />}/>
          <Route  path="/projects"  element={<Projects />}/>
          <Route  path="/contact"  element={<Contact />}/>
          <Route  path="/footer"  element={<Footer />}/>
        </Routes>
          <NavBar />
          <Banner />
          <Skills />
          <Projects />
          <Contact />
          <Email />
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
