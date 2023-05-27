import './App.css';
import Home from './Home/Home';

import {  BrowserRouter } from 'react-router-dom';
import Skills from './Skills/Skills';
import Header from './Header/Header';
import About from './About/About';
import Projects from './Projects/Projects';
import Github from './Github Stats/Github';
import Codechef from './Codechef/Codechef';
import Footer from './Footer/Footer';
import Contact from './Contact/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Home />
        <About />
        <Skills />
        <Github/>
        <Projects />
        <Codechef/>
<Contact/>
        <Footer/>


      </BrowserRouter>

    </>



  );
}

export default App;
