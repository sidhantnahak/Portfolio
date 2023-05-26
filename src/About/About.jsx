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
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam optio reiciendis autem blanditiis facilis ducimus assumenda minus facere eius harum? Provident, inventore nihil tenetur quidem placeat facilis fugit recusandae? Exercitationem amet beatae placeatlorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni eveniet error aut dolor nulla exercitationem quae vel, illum atque maxime?</p>
        </div>
    </div>
   </div>
  )
}

export default About