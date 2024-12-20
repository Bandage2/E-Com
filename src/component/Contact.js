import React from 'react';
import './Css/Contact.css';

export default function Contact() {
    return (
        <>
            <section id="contact">
                <div className="contact container">
                    <div className="map">
                            <iframe src="https://maps.google.com/maps?q=SevenUnique Tech Solutions Pvt. Ltd.&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"  title="Google Maps for SevenUnique Tech Solutions Pvt. Ltd." frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                    <form action="https://formspree.io/f/xzbowpjq" method="POST">
                        <div className="form">
                            <div className="form-txt">
                                <h4>INFORMATION</h4>
                                <h1>Contact Us</h1>
                                <span>As you might expect of a company that began as a high-end interiors contractor, we pay strict
                                    attention.</span>
                                <h3>USA</h3>
                                <p>195 E Parker Square Dr, Parker, CO 801<br />+43 982-314-0958</p>
                                <h3>India</h3>
                                <p>HW95+C9C, Lorem ipsum dolor sit.<br />411014</p>
                            </div>
                            <div className="form-details">
                                <input type="text" name="name" id="name" placeholder="Name" required />
                                <input type="email" name="email" id="email" placeholder="Email" required />
                                <textarea name="message" id="message" cols="52" rows="7" placeholder="Message" required></textarea>
                                <button>SEND MESSAGE</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}
