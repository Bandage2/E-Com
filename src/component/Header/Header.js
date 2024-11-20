import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import home from '../Home';
import Contact from '../Contact';
import './Header.css';

export default function Header() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, []);

    const dropdown = windowWidth > 768 ? 'dropstart ' : 'dropdown ';
    const dropwidth = windowWidth > 768 ? 'dropdown-menu-large dropdown-menu overflow-x-hidden dropdown-menu-center overflow-scroll scroll p-3 mt-4 ' : 'dropdown-menu-small dropdown-menu overflow-x-hidden dropdown-menu-center overflow-scroll scroll p-3 mt-4 '



    return (
        <>

            <section className=" top-txt ">
                <div className="head container ">
                    <div className="head-txt ">
                        <p>Free shipping, 30-day return or refund guarantee.</p>
                    </div>
                    <div className='header-search'>
                        <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="search products..." />
                    </div>
                    <div className="sing_in_up ">
                        <Link href="# ">SIGN IN</Link>
                        <Link href="# ">SIGN UP</Link>
                    </div>
                </div>
            </section>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container navbar-container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0 menu-items">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav-link" href="#">Electronics</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='#' className="nav-link" href="#">Accessories</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='#' className="nav-link" href="#">Computers</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='#' className="nav-link" href="#">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contact' className="nav-link" href="#">Contact</Link>
                            </li>
                        </ul>
                        <div className='header-icons'>
                            <ul>
                                <li>

                                    <Link className='' id="dropdownMenuButton1" data-bs-toggle="dropdown"><i class="bi bi-cart"></i></Link>
                                    <div className={dropdown}>
                                        <div class={dropwidth} aria-labelledby="dropdownMenuButton1">
                                            <p className='fw-bold fs-5'>Shopping cart</p>
                                            <div class="card mb-3 border-0 border-bottom card-height" >
                                                <div class="row ">
                                                    <div class="col-lg-4 col-12">
                                                        <img src="../images/tshirt.jpeg" class="img-fluid rounded-start ms-0 dd-img" alt="..." />
                                                    </div>
                                                    <div class="col-lg-8 col-12">
                                                        <div class="card-body row py-0">
                                                            <div className='col-8 lh-sm'>
                                                                <p className='fw-bold '>Rey Nylon Backpack</p>
                                                                <div className='row lh-sm'>
                                                                    <p className='col-6 border-end text-secondary fs-7'>Black</p>
                                                                    <p className='col-6 text-secondary fs-7'>2xl</p>
                                                                </div>


                                                                <p className='col-6 text-secondary fs-7'>Qty-1</p>
                                                            </div>


                                                            <div className='col-4 ms-auto py-0'>
                                                                <button type="button" class="btn btn-outline-success">$74</button><br></br>
                                                                <button type="button" class="btn btn-outline-none text-primary px-0 ">Remove</button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card mb-3 border-0 border-bottom card-height" >
                                                <div class="row ">
                                                    <div class="col-lg-4 col-12">
                                                        <img src="../images/tshirt.jpeg" class="img-fluid rounded-start ms-0 dd-img" alt="..." />
                                                    </div>
                                                    <div class="col-lg-8 col-12">
                                                        <div class="card-body row py-0">
                                                            <div className='col-8 lh-sm'>
                                                                <p className='fw-bold '>Rey Nylon Backpack</p>
                                                                <div className='row lh-sm'>
                                                                    <p className='col-6 border-end text-secondary fs-7'>Black</p>
                                                                    <p className='col-6 text-secondary fs-7'>2xl</p>
                                                                </div>


                                                                <p className='col-6 text-secondary fs-7'>Qty-1</p>
                                                            </div>


                                                            <div className='col-4 ms-auto py-0'>
                                                                <button type="button" class="btn btn-outline-success">$74</button><br></br>
                                                                <button type="button" class="btn btn-outline-none text-primary px-0 ">Remove</button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card mb-3 border-0 border-bottom card-height" >
                                                <div class="row ">
                                                    <div class="col-lg-4 col-12">
                                                        <img src="../images/tshirt.jpeg" class="img-fluid rounded-start ms-0 dd-img" alt="..." />
                                                    </div>
                                                    <div class="col-lg-8 col-12">
                                                        <div class="card-body row py-0">
                                                            <div className='col-8 lh-sm'>
                                                                <p className='fw-bold '>Rey Nylon Backpack</p>
                                                                <div className='row lh-sm'>
                                                                    <p className='col-6 border-end text-secondary fs-7'>Black</p>
                                                                    <p className='col-6 text-secondary fs-7'>2xl</p>
                                                                </div>


                                                                <p className='col-6 text-secondary fs-7'>Qty-1</p>
                                                            </div>


                                                            <div className='col-4 ms-auto py-0'>
                                                                <button type="button" class="btn btn-outline-success">$74</button><br></br>
                                                                <button type="button" class="btn btn-outline-none text-primary px-0 ">Remove</button>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='bg-light px-4 pt-4'>
                                                <div className='row lh-sm'>
                                                    <p className='col-6 fw-bold'>Subtotal</p>
                                                    <p className='col-6 fw-bold text-end'>299</p>
                                                </div>
                                                <p className='text-secondary lh-sm'>Shipping and taxes calculated at checkout.</p>
                                                <div className='row'>
                                                    <div className=' col-6 '><button type="button" class="btn rounded-pill bg-white w-100">View cart</button></div>
                                                    <div className=' col-6 '><button type="button" class="btn CO-btn text-light w-100  rounded-pill ">Checkout</button></div>

                                                </div>
                                            </div>
                                        </div>



                                    </div>



                                    <Link><i class="bi bi-heart"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </nav>
        </>
    )
}
