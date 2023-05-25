import React from 'react'
import Header from '../Header/Header'
import './Home.css'

const Home = () => {
  return (
    <>
        <Header/>

    <div className="home_container">

      <div className="home_item_container">
        <h1 className='hi_there'>Hi there,
        </h1>
        <h1 className='name_h1'>I'm Sidhant</h1>

        <p>Fullstack Web Devloper</p>

        <div className="button_div">
          <button>Resume</button>
          <button>Contact</button>
        </div>
      </div>
    </div>
    </>
   
  )
}

export default Home