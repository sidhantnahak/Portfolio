import './App.css';
import Home from './Home/Home';

import { Routes, BrowserRouter } from 'react-router-dom';
import Skills from './Skills/Skills';
import Header from './Header/Header';
import About from './About/About';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
<Home/>
<About/>
<Skills/>
    <Routes>

     
    </Routes>
    
    
    </BrowserRouter>

    </>

    
      
  );
}

export default App;
