import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
        <div className="contact_container">
            <h1>Get In Touch</h1>
            <div className="contact_item_container">


                <div className="form_div">
                    <form action="">
                        <div className="form_item">


                            <label htmlFor="name">Name :</label>
                            <div>
                                <i className="fa-regular fa-user"></i>
                                <input type="text" name='name' id='name' placeholder='Enter Your Name' />

                            </div>
                        </div>

                        <div className="form_item">


                            <label htmlFor="email">Email :</label>

                            <div>
                                <i class="fa-solid fa-envelope"></i>
                                <input type="email" id='email' placeholder='Enter Your Email' />

                            </div>
                        </div>
                        <div className="form_item">


                            <label htmlFor="phone">Phone :</label>

                            <div>
                                <i class="fa-solid fa-phone"></i>
                                <input type="number" id='phone' placeholder='Enter Your Phone Number' />

                            </div>
                        </div>

                        <div className="form_item">
                            <label htmlFor="phone">Message :</label>

                            <textarea name="textarea" id="textarea" ></textarea>

                        </div>
                        <button></button>

                    </form>
                </div>
                <div className="media_div">
                    <div className="media_item_div">
                        <i class="fa-solid fa-envelope"></i>
                        <h4> Gmail</h4>
                        <p>sidhantnahak2@gmail.com</p>
                    </div>
                    <div className="media_item_div">
                        <i class="fa-solid fa-phone"></i>
                        <h4>Whatsapp</h4>

                        <p>+91 6371971275</p>
                    </div>
                    <div className="media_item_div">
                    <i class="fa-brands fa-github"></i>

                        <h4>Github</h4>
                        <p>github.com/sidhantnahak</p>
                    </div>
                    <div className="media_item_div">
                    <i class="fa-brands fa-linkedin"></i>

                        <h4>Linkedin</h4>
                        <p>linkedin.com/in/sidhantnahak</p>
                    </div>
                    <div className="media_item_div">
                    <i class="fa-brands fa-twitter"></i>

                        <h4>Twiter</h4>
                        <p>twitter.com/SidhantNahak2</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact