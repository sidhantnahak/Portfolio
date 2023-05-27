import React from 'react'
import './Projects.css'
// import profile from '../images/profile.jpg'
import stress_detection from '../images/stress_detection.png'
import ecommerce2 from '../images/ecommerce2.png'
import ecommerce3 from '../images/ecommerece3.png'
import laundry from '../images/laundry1.png'

import { Link } from 'react-router-dom'
const Projects = () => {
  return (
    <>
   

    <div id='project_container'  className="project_container">

    
    <h1 className='project_heading'>Projects</h1>
    <div className="project_item_container">
        <div className="project_item">
            <img src={ecommerce2} alt="" />
            <p className='project_name'>Ecommerce Shopping</p>
            <p className='jus'>Html | Css | Javascript | React | Node.js | Express.js | MongoDB</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci labore ullam perspiciatis natus, similique porro assumenda at odio est ducimus?</p>

            <div className="project_item_buttons">
<Link target='blank' to="https://github.com/sidhantnahak/Mern_Stack_Project.git">Github</Link><Link target='blank' to="">Go Live</Link>
            </div>
        </div>
        <div className="project_item"><img src={laundry} alt="" />
            <p className='project_name'>Laundry Management System </p>
            <p>Html | Css | Javascript | React | Node.js | Express.js | MongoDB</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero corporis amet iste accusamus cupiditate aut iusto magnam est ratione reprehenderit.</p>

            <div className="project_item_buttons">
<Link target='blank' to="https://github.com/sidhantnahak/Laundry_Management_System.git">Github</Link><Link target='blank' to="">Go Live</Link>
                
            </div></div>
        <div className="project_item"><img src={ecommerce3} alt="" />
            <p className='project_name'>Ecommerce </p>
            <p>Html | Css | Javascript | React</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vel vlum numquam facilis, quo fugiat molestiae assumenda sunt distinctio. Dicta, volup.</p>

            <div className="project_item_buttons">
<Link target='blank' to="https://github.com/sidhantnahak/Ecommerce.git">Github</Link><Link to="https://sidhantnahak.github.io/Ecommerce/" target='blnak'>Go Live</Link>
                
            </div></div>
        <div className="project_item"><img src={stress_detection} alt="" />
            <p className='project_name'>Stress Detection Machine</p>
            <p>Python | Naive Bayes</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae necessitatibus consectetur sed corrupti, rerum dolorem dolores rep</p>

            <div className="project_item_buttons">
<Link target='blank' to="https://github.com/sidhantnahak/ML_Project_Stress_Detection_Machine.git">Github</Link><Link target='blank' to="">Go Live</Link>
                
            </div></div>
    </div>
    </div>
   
    </>
  )
}

export default Projects