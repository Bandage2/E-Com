import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-cta pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta d-flex">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="cta-text">
                                        <h4>Find us</h4>
                                        <span>213, 2nd floor
                                            Pushp enclave, Tonk Road
                                            Pratap Nagar, Jaipur
                                            Rajasthan-302033</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="fas fa-phone"></i>
                                    <div className="cta-text">
                                        <h4>Call us</h4>
                                        <span>+91 9660339514</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta">
                                    <i className="far fa-envelope-open"></i>
                                    <div className="cta-text">
                                        <h4>Mail us</h4>
                                        <span>info@FinUnique.in</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-5 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <a href="javascript:void(0)"><img src="./images/Digihub.png" className="img-fluid" alt="logo" /></a>
                                    </div>
                                    <div className="footer-text ms-4">
                                        <p>We are selling electronics, gadgets, or accessories, our platform is optimized for both performance and design, ensuring your products stand out.</p>
                                    </div>
                                    <div className="footer-social-icon ps-md-4">
                                        <span>Follow us</span>
                                        <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                        <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                                        <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-4 col-md-6 mb-30 ps-md-5 mt-sm-5 mt-xs-5">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <li><Link to={"/"}>Home</Link></li>
                                        <li><Link to='/myaccount'>My Account</Link></li>
                                        <li><Link to='/wishlist'>Wishlist</Link></li>
                                        <li><Link to='/refundpolicy'>Refund Policy</Link></li>

                                        <li><Link to='/contact'>Contact us</Link></li>
                                        <li><Link to='/termsandconditions'>Terms and conditions</Link></li>

                                        <li><Link to='/privacypolicy'>Privacy Policy</Link></li>
                                        <li><Link to='/shippingpolicy'>Shipping Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>Copyright &copy; 2024, All Right Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
