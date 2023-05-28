import React, { useEffect } from "react";
import './Header.css'
import { Link } from 'react-router-dom'

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

  const HomeHandler = () => {
    let elem = document.getElementById("home_container");
    elem.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    elem.style.scrollMarginBlockStart = "110px"
    elem.style.scrollMarginBlockEnd = "110px"

  }

  const AboutHandler = () => {
    let elem = document.getElementById("about_container");
    elem.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    elem.style.scrollMarginBlockStart = "110px"
    elem.style.scrollMarginBlockEnd = "110px"

  }

  const ProjectHandler = () => {
    let elem = document.getElementById("project_container");
    elem.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    elem.style.scrollMarginBlockStart = "110px"
    elem.style.scrollMarginBlockEnd = "110px"

  }

 
  
  return (
    <>
      <header className="header_container">
        <div className="header_item_container" >
          <div className="name_div">
            <Link onClick={HomeHandler}>Sidhant Nahak</Link>
          </div><i className="fa-solid fa-files"></i>
          <ul className="item_container">
            <li>
              <Link onClick={HomeHandler}><i className="fa-solid fa-house"></i>
                Home
              </Link>
            </li>
            <li>
              <Link onClick={AboutHandler}><i className="fa-regular fa-user"></i>
                About
              </Link>
            </li>
            <li>
              <Link onClick={ProjectHandler}><i className="fa-regular fa-solid fa-file"></i>

                Projects
              </Link>
            </li>
            <li>
              <Link target="blank" to="https://drive.google.com/file/d/1WOwTlO1uRS36Jr26PSD7BDUbjYGKbTWD/view?usp=drive_link"><i className="fa-solid fa-address-card"></i>
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
          <li><Link onClick={HomeHandler}>Home</Link></li>

          <li><Link onClick={AboutHandler}>About</Link></li>

          <li><Link onClick={ProjectHandler} >Projects</Link></li>
          <li><Link target="blank" to="https://drive.google.com/file/d/1WOwTlO1uRS36Jr26PSD7BDUbjYGKbTWD/view?usp=drive_link">Resume</Link></li>

        </ul>
      </div>

    </>
  );
};

export default Header;
