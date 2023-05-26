import React from 'react'
import './Projects.css'
import profile from '../images/profile.jpg'
import { Link } from 'react-router-dom'
const Projects = () => {
  return (
    <>
   

    <div id='project_container'  className="project_container">

    
    <h1 className='project_heading'>Projects</h1>
    <div className="project_item_container">
        <div className="project_item">
            <img src={profile} alt="" />
            <p className='project_name'>Ecommerece </p>
            <p>Html Css Javascript React Node.js Express.js MongoDB</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci labore ullam perspiciatis natus, similique porro assumenda at odio est ducimus?</p>

            <div className="project_item_buttons">
<Link to="">Github</Link><Link to="">Go Live</Link>
            </div>
        </div>
        <div className="project_item"><img src={profile} alt="" />
            <p className='project_name'>Laundry Management System </p>
            <p>Html Css Javascript React Node.js Express.js MongoDB</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero corporis amet iste accusamus cupiditate aut iusto magnam est ratione reprehenderit.</p>

            <div className="project_item_buttons">
<Link to="">Github</Link><Link to="">Go Live</Link>
                
            </div></div>
        <div className="project_item"><img src={profile} alt="" />
            <p className='project_name'>Ecommerece </p>
            <p>Html Css Javascript React</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vel vlum numquam facilis, quo fugiat molestiae assumenda sunt distinctio. Dicta, volup.</p>

            <div className="project_item_buttons">
<Link to="">Github</Link><Link to="">Go Live</Link>
                
            </div></div>
        <div className="project_item"><img src={profile} alt="" />
            <p className='project_name'>Recipe</p>
            <p>Html Css Javascript</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae necessitatibus consectetur sed corrupti, rerum dolorem dolores rep</p>

            <div className="project_item_buttons">
<Link to="">Github</Link><Link to="">Go Live</Link>
                
            </div></div>
    </div>
    </div>
   
    </>
  )
}

export default Projects