import React from "react";
import './Header.css'
import {Link }from 'react-router-dom'

const Header = () => {


    const Toogle = () => {
        // let toogle_btn_icon = document.querySelector('.bar i');
       let dropdown = document.querySelector('.sidebar')
        let profile_div = document.querySelector('.arrow_div')
        let arrow = document.querySelector('#arrow')
    
        dropdown.classList.toggle('open')
        profile_div.classList.toggle('open')
    
        const isOpen = dropdown.classList.contains('open');
        arrow.classList = isOpen ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"
    
        // toogle_btn_icon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
      }
    return (
        <>
        <header className="header_container">
            <div className="header_item_container" >
                <div className="name_div">
                    <Link to="/">Sidhant Nahak</Link>
                </div><i className="fa-solid fa-files"></i>
                <ul className="item_container">
                    <li> 
                        <Link to="/"><i className="fa-solid fa-house"></i>
                           Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about"><i className="fa-regular fa-user"></i>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects"><i className="fa-regular fa-solid fa-file"></i>
                        
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to="/resume"><i className="fa-solid fa-address-card"></i>
                        Resume
                        </Link>
                    </li>


                </ul>
                <div onClick={Toogle} className='arrow_div'>
                    <i id='profile' className="fa-solid fa-user"></i>
                    <i id='arrow' className="fa-solid fa-angle-down"></i>
                  </div>
                {/* <div onClick={Toogle}  className="bar">
                    <i className="fa-solid fa-bars" />
                  </div> */}
            </div>
        </header>


        <div className="sidebar">
            <ul>
              <li><Link to="/home">Home</Link></li>

              <li><Link to="/about">About</Link></li>

              <li><Link  to="/projects">Projects</Link></li>
              <li><Link to="/resume">Resume</Link></li>

            </ul>
          </div>
        
        </>
    );
};

export default Header;
