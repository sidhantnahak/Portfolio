import './App.css';
import Home from './Home/Home';

import { BrowserRouter as Router ,Routes,Route, BrowserRouter } from 'react-router-dom';
import Skills from './Skills/Skills';

function App() {
  return (
    <>
    <BrowserRouter>
 <Home/>
 <Skills/>
    <Routes>

      {/* <Route exact path='/' element={<Home/>}/> */}
       {/* <Route exact path='/skills' element={<Skills/>}/>  */}
     
    </Routes>
    
    
    </BrowserRouter>

    </>

    
      
  );
}

export default App;
