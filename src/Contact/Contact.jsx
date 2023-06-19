import React from 'react'
import './Contact.css'
import { Link} from 'react-router-dom'
const Contact = () => {


    return (
        <div id="contact_container" className="contact_container">
            <h1>Get In Touch</h1>
            <div className="contact_item_container">


                <div className="form_div">
                    <form action="">
                        <div className="form_item">


                            <label htmlFor="name">Name :</label>
                            <div>
                                <i className="fa-regular fa-user"></i>
                                <input type="text" name='name' id='name' placeholder='Enter Your Name' required />

                            </div>
                        </div>

                        <div className="form_item">


                            <label htmlFor="email">Email :</label>

                            <div>
                                <i className="fa-solid fa-envelope"></i>
                                <input type="email" id='email' placeholder='Enter Your Email' required />

                            </div>
                        </div>
                        <div className="form_item">


                            <label htmlFor="phone">Phone :</label>

                            <div>
                                <i className="fa-solid fa-phone"></i>
                                <input type="number" id='phone' placeholder='Enter Your Phone Number' required />

                            </div>
                        </div>

                        <div className="form_item">
                            <label htmlFor="phone">Message :</label>



                            <textarea name="textarea" id="textarea" ></textarea>

                        </div>
                        <button><Link>Send</Link></button>

                    </form>
                </div>
                <div className="media_div">
                <Link target='blank' to="https://gmail.com">

                    <div className="media_item_div">
                        <i className="fa-solid fa-envelope"></i>
                        <h4> Gmail</h4>
                        <p>sidhantnahak2@gmail.com</p>
                    </div>
                    </Link>
                    <Link target='blank'to="https://wa.me/6371971275" >
                    
                    <div className="media_item_div">
                        <i className="fa-brands fa-whatsapp"></i>
                        <h4>Whatsapp</h4>

                        <p>+91 6371971275</p>
                    </div>
                    </Link>
                    <Link target='blank' to="https://github.com/sidhantnahak">

                    <div className="media_item_div">
                        <i className="fa-brands fa-github"></i>

                        <h4>Github</h4>
                        <p>github.com/sidhantnahak</p>
                    </div>
                    </Link>
                    <Link target='blank' to="https://linkedin.com/in/sidhantnahak">
                    
                    <div className="media_item_div">
                        <i className="fa-brands fa-linkedin"></i>

                        <h4>Linkedin</h4>
                        <p>linkedin.com/in/sidhantnahak</p>
                    </div>
                    </Link>
                    <Link target='blank' to="https://twitter.com/SidhantNahak2">
                        <div target='blank' className="media_item_div">
                        <i className="fa-brands fa-twitter"></i>
                            <h4>Twiter</h4>
                            <p>twitter.com/SidhantNahak2</p>

                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact