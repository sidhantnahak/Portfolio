import React from 'react'
import Header from '../Header/Header'
import './Home.css'
import Skills from '../Skills/Skills'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()
  return (
    <>
      {/* <Header /> */}

      <div id='home_container' className="home_container">

        <div className="home_item_container">
          <h1 className='hi_there'>Hi there,
          </h1>
          <h1 className='name_h1'>I'm Sidhant</h1>

          <p>Fullstack Web Devloper</p>
          <div className="button_div">
            <Link to='https://drive.google.com/file/d/1WOwTlO1uRS36Jr26PSD7BDUbjYGKbTWD/view?usp=drive_link'>Resume</Link> 
            <Link>Contact</Link>
          </div>
        </div>
      </div>
      {/* <div id='mydiv' style={{height:"100vh",width:"100vw",background:"red"}}></div> */}
      
    </>

  )
}

export default Home