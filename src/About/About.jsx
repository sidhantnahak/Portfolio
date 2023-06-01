import React from 'react'
import './About.css'
import profile from "../images/profile.jpg"
const About = () => {

  
  return (
    <div id="about_container" className="about_container">
      <div className="about_item_container">
        <div className="image_container">
          <img src={profile} alt="Profile_picture" />
        </div>
        <div className="detail_container">
          <h1>About me</h1>
          <p>Enthusiastic Coder and Web devloper. Eager to contribute for team sucess through hard work, attention to detail and excellent organizational skills.My goal is to achieve a responsible position and
            explore myself more efficiently in an industry. My goal also
            includes learning new technologies which will be introduced
            in upcoming years and contribute my best skills to the
            company. I would like to expand my knowledge by working
            hard and learning as much as possible.</p>
        </div>
      </div>
    </div>
  )
}

export default About