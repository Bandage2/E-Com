import React from 'react';
import './Css/Contact.css';

export default function Contact() {
    return (
        <>
            <section id="contact">
                <div className="contact container">
                    <div className="map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3561.264701407029!2d75.869785!3d26.799699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDQ3JzU4LjkiTiA3NcKwNTInMTEuMiJF!5e0!3m2!1sen!2sin!4v1724749044503!5m2!1sen!2sin"  title="Google Maps for SevenUnique Tech Solutions Pvt. Ltd." frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                    <form action="https://formspree.io/f/xzbowpjq" method="POST">
                        <div className="form">
                            <div className="form-txt">
                                <h4>INFORMATION</h4>
                                <h1>Contact Us</h1>
                                <span>As you might expect of a company that began as a high-end interiors contractor, we pay strict
                                    attention.</span>
                                <h3>Find us</h3>
                                <p>PLOT NO 97, DAKSHINPURI-I, SHRIKISHANPURA, SANGANER, Jagatpura, Jaipur, Jaipur- 302017, Rajasthan<br />+91 9660339514</p>
                                <h3>Mail</h3>
                                <p>info@FinUnique.in</p>
                            </div>
                            <div className="form-details">
                                <input type="text" name="name" id="name" placeholder="Name" required />
                                <input type="email" name="email" id="email" placeholder="Email" required />
                                <textarea name="message" id="message" cols="59" rows="7" placeholder="Message" required></textarea>
                                <button>SEND MESSAGE</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
