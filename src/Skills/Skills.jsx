import React from 'react'
import './Skills.css'
import html from'../images/html.png'
import cplus from'../images/c++4.avif'
import java from'../images/java.png'
import css from'../images/css.png'
import javascript from'../images/javascript.png'
import bootstrap from'../images/bootstrap1.avif'
import reactjs from'../images/react.png'
import nodejs from'../images/nodejs.png'
import exprssjs from'../images/expressjs3.png'
import mongodb from'../images/monogodb7.avif'
import git from'../images/git.png'
import GitHub from'../images/github10.avif'



const Skills = () => {
    
    return (
        <div id="skills_container"  className="skills_container">
            <h2>My Skills</h2>

            <div className="skills_item_container">

                <div className="skil_item">
                    <div className="img_div">
                       <img src={cplus} alt="C++" />
                    </div> <p>
                            C++
                        </p>
                </div>
                <div className="skil_item">
                    <div className="img_div">
                       <img src={java} alt="java" />
                        
                    </div><p>
                            JAVA
                        </p>
                </div>
                <div className="skil_item">
                    <div className="img_div">
                       <img src={html} alt="html" />
                        
                    </div><p>
                            HTML5
                        </p>
                </div>
                <div className="skil_item">
                    <div className="img_div">
                    <img src={css} alt="Css" />
                       
                    </div> <p>
                            CSS3
                        </p>
                </div>
                <div className="skil_item">
                    <div className="img_div">
                       <img src={javascript} alt="Javascript" />
                        
                    </div><p>
                            JAVASCRIPT
                        </p>
                </div>
                <div className="skil_item">
                    <div className="img_div">
                       <img src={bootstrap} alt="Bootstarap" />
                        
                    </div><p>
                            BOOTSTRAP
                        </p>
                </div>
                <div className="skil_item">
                    <div className="img_div">
                    <img src={reactjs} alt="Reactjs" />
                       
                    </div> <p>
                            REACT JS
                        </p>
                </div>
                <div className="skil_item">
                    <div className="img_div">
                       <img src={nodejs} alt="nodejs" />
                        
                    </div><p>
                            NODE JS
                        </p>
                </div>
                <div className="skil_item">
                    <div className="img_div">
                       <img src={exprssjs} alt="Expressjs" />
                        
                    </div><p>
                            EXPRESS JS
                        </p>
                </div>
                <div className="skil_item">
                    <div className="img_div">
                       <img src={git} alt="Git" />
                        
                    </div><p>
                            GIT
                        </p>
                </div>
                <div className="skil_item">
                    <div className="img_div">
                       <img src={GitHub} alt="Github" />
                        
                    </div><p>
                            GITHUB
                        </p>
                </div>
                <div className="skil_item">
                    <div className="img_div">
                       <img src={mongodb} alt="Mongodb" />
                        
                    </div>
                    <p>
                            MONGODB
                        </p>
                </div>
            </div>

        </div>
    )
}

export default Skills