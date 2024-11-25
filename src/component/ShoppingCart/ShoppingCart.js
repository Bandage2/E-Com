import React from 'react'
import './ShoppingCart.css'
import { Link } from 'react-router-dom'



function ShoppingCart() {
    return (
        <>

            <h3 className='px-5 pt-5'>Shopping Cart</h3>

            <nav aria-label="breadcrumb" className='px-5'>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/accessories">Clothing Categories</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Shopping Cart</li>
                </ol>
            </nav>

            <section className='container border-top border-bottom my-5 py-5 '>
                <div className='row '>
                    <div className='col-lg-8 col-12 pe-5 '>
                        <div className='row border-bottom py-5'>
                            <div className='bg-light col-lg-3 col-6 SC-img-h '>
                                <img src='../images/tshirt.jpeg ' className='SC-img-h ' />
                            </div>
                            <div className='col-lg-3 col-6 ps-5 ps-lg-2'>
                                <p className='fw-bold'>Rey Nylon Backpack</p>
                                <div className='row'>
                                    <p className='col-6 border-end text-secondary'>Black</p>
                                    <p className='col-6 text-secondary'>2xl</p>
                                </div>

                                <button type="button" className="btn btn-outline-secondary rounded-pill py-1 px-2">in Stock</button>
                            </div>

                            <div className='col-lg-3 col-6 ps-5 ps-lg-0  pt-2 pt-lg-0'>
                                <button className="button ID-btn me-2" id="decrement">-</button>
                                <span className="number" id="counter">1</span>
                                <button className="button ID-btn ms-2" id="increment">+</button>
                            </div>
                            <div className='col-lg-3 col-6 pt-2 pt-lg-0 ps-5 ps-lg-0'>
                                <button type="button" className="btn btn-outline-success">$74</button><br></br>
                                <button type="button" className="btn btn-outline-none text-primary px-0 mtr">Remove</button>
                            </div>

                        </div>
                        <div className='row border-bottom py-5'>
                            <div className='bg-light col-lg-3 col-6 SC-img-h '>
                                <img src='../images/tshirt.jpeg ' className='SC-img-h ' />
                            </div>
                            <div className='col-lg-3 col-6 ps-5 ps-lg-2'>
                                <p className='fw-bold'>Rey Nylon Backpack</p>
                                <div className='row'>
                                    <p className='col-6 border-end text-secondary'>Black</p>
                                    <p className='col-6 text-secondary'>2xl</p>
                                </div>

                                <button type="button" className="btn btn-outline-secondary rounded-pill py-1 px-2">in Stock</button>
                            </div>

                            <div className='col-lg-3 col-6 ps-5 ps-lg-0  pt-2 pt-lg-0'>
                                <button className="button ID-btn me-2" id="decrement">-</button>
                                <span className="number" id="counter">1</span>
                                <button className="button ID-btn ms-2" id="increment">+</button>
                            </div>
                            <div className='col-lg-3 col-6 pt-2 pt-lg-0 ps-5 ps-lg-0'>
                                <button type="button" className="btn btn-outline-success">$74</button><br></br>
                                <button type="button" className="btn btn-outline-none text-primary px-0 mtr">Remove</button>
                            </div>

                        </div>
                        <div className='row border-bottom py-5'>
                            <div className='bg-light col-lg-3 col-6 SC-img-h '>
                                <img src='../images/tshirt.jpeg ' className='SC-img-h ' />
                            </div>
                            <div className='col-lg-3 col-6 ps-5 ps-lg-2'>
                                <p className='fw-bold'>Rey Nylon Backpack</p>
                                <div className='row'>
                                    <p className='col-6 border-end text-secondary'>Black</p>
                                    <p className='col-6 text-secondary'>2xl</p>
                                </div>

                                <button type="button" className="btn btn-outline-secondary rounded-pill py-1 px-2">in Stock</button>
                            </div>

                            <div className='col-lg-3 col-6 ps-5 ps-lg-0  pt-2 pt-lg-0'>
                                <button className="button ID-btn me-2" id="decrement">-</button>
                                <span className="number" id="counter">1</span>
                                <button className="button ID-btn ms-2" id="increment">+</button>
                            </div>
                            <div className='col-lg-3 col-6 pt-2 pt-lg-0 ps-5 ps-lg-0'>
                                <button type="button" className="btn btn-outline-success">$74</button><br></br>
                                <button type="button" className="btn btn-outline-none text-primary px-0 mtr">Remove</button>
                            </div>

                        </div>
                        <div className='row border-bottom py-5'>
                            <div className='bg-light col-lg-3 col-6 SC-img-h '>
                                <img src='../images/tshirt.jpeg ' className='SC-img-h ' />
                            </div>
                            <div className='col-lg-3 col-6 ps-5 ps-lg-2'>
                                <p className='fw-bold'>Rey Nylon Backpack</p>
                                <div className='row'>
                                    <p className='col-6 border-end text-secondary'>Black</p>
                                    <p className='col-6 text-secondary'>2xl</p>
                                </div>

                                <button type="button" className="btn btn-outline-secondary rounded-pill py-1 px-2">in Stock</button>
                            </div>

                            <div className='col-lg-3 col-6 ps-5 ps-lg-0  pt-2 pt-lg-0'>
                                <button className="button ID-btn me-2" id="decrement">-</button>
                                <span className="number" id="counter">1</span>
                                <button className="button ID-btn ms-2" id="increment">+</button>
                            </div>
                            <div className='col-lg-3 col-6 pt-2 pt-lg-0 ps-5 ps-lg-0'>
                                <button type="button" className="btn btn-outline-success">$74</button><br></br>
                                <button type="button" className="btn btn-outline-none text-primary px-0 mtr">Remove</button>
                            </div>

                        </div>



                    </div>

                    <div className='flex-1 col-lg-4 px-4 px-lg-0 py-5'>
                        <div className='  position-sticky top' id='mydiv'>
                            <h5 className=' fw-bold'>Order Summary</h5>
                            <div className='row border-bottom'>
                                <p className='col-9 text-secondary'>Subtotal</p>
                                <p className='col-3 fw-bold'>$249.00</p>
                            </div>
                            <div className='row border-bottom'>
                                <p className='col-9 text-secondary'>Shopping estimate</p>
                                <p className='col-3 fw-bold'>$249.00</p>
                            </div>
                            <div className='row border-bottom'>
                                <p className='col-9 text-secondary'>Tax estimate</p>
                                <p className='col-3 fw-bold'>$249.00</p>
                            </div>
                            <div className='row border-bottom'>
                                <p className='col-9 fw-bold'>Order total</p>
                                <p className='col-3 fw-bold'>$249.00</p>
                            </div>

                            <button type="button" className="btn CO-btn text-light w-100 rounded-pill py-2 my-2">Checkout</button>

                        </div>

                    </div>
                </div>




            </section>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='fx-product'>
                            <div class="card border-0">
                                <div className='img-bg'>
                                    <img src="/images/fx-1.png" class="card-img-top" alt="..." />
                                    <div className='product-size'>
                                        <ul className='d-flex flex-direction-row justify-content-between'>
                                            <li><a>XS</a></li>
                                            <li><a>S</a></li>
                                            <li><a>M</a></li>
                                            <li><a>ML</a></li>
                                            <li><a>XL</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <ul className='d-flex flex-direction-row justify-content-between'>
                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                    </ul>
                                    <h5 class="card-title mt-4">Campus Sutra</h5>
                                    <p class="card-text">Self-Design Sugarcane Regular Fit Shirt </p>
                                    <div className='d-flex justify-content-between align-items-baseline'>
                                        <a href="#" class="buy-btn">Buy Now</a>
                                        <div className='reviews'>
                                            <i class="bi bi-star-fill me-1"></i>
                                            <span>
                                                4.9 (89 reviews)
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Second Product */}
                    <div className='col-md-3 mb-5'>
                        <div className='fx-product'>
                            <div class="card border-0">
                                <div className='img-bg'>
                                    <img src="/images/fx-2.png" class="card-img-top" alt="..." />
                                    <div className='product-size btns'>
                                        <ul className='d-flex flex-direction-row justify-content-between'>
                                            <li><a className='btn cart-btn'><i class="bi bi-cart me-1"></i> Add To Bag</a></li>
                                            <li><a className='btn view-btn'><i class="bi bi-arrows-fullscreen me-1"></i> Quick View</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <ul className='d-flex flex-direction-row justify-content-between'>
                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                    </ul>
                                    <h5 class="card-title mt-4">Xiaomi Pad 6</h5>
                                    <p class="card-text">Redmi Pad SE| All Day Battery</p>
                                    <div className='d-flex justify-content-between align-items-baseline'>
                                        <a href="#" class="buy-btn">Buy Now</a>
                                        <div className='reviews'>
                                            <i class="bi bi-star-fill me-1"></i>
                                            <span>
                                                4.9 (89 reviews)
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='fx-product'>
                            <div class="card border-0">
                                <div className='img-bg'>
                                    <img src="/images/fx-1.png" class="card-img-top" alt="..." />
                                    <div className='product-size'>
                                        <ul className='d-flex flex-direction-row justify-content-between'>
                                            <li><a>XS</a></li>
                                            <li><a>S</a></li>
                                            <li><a>M</a></li>
                                            <li><a>ML</a></li>
                                            <li><a>XL</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <ul className='d-flex flex-direction-row justify-content-between'>
                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                    </ul>
                                    <h5 class="card-title mt-4">Campus Sutra</h5>
                                    <p class="card-text">Self-Design Sugarcane Regular Fit Shirt </p>
                                    <div className='d-flex justify-content-between align-items-baseline'>
                                        <a href="#" class="buy-btn">Buy Now</a>
                                        <div className='reviews'>
                                            <i class="bi bi-star-fill me-1"></i>
                                            <span>
                                                4.9 (89 reviews)
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* forth Product */}
                    <div className='col-md-3 mb-5'>
                        <div className='fx-product'>
                            <div class="card border-0">
                                <div className='img-bg'>
                                    <img src="/images/fx-2.png" class="card-img-top" alt="..." />
                                    <div className='product-size btns'>
                                        <ul className='d-flex flex-direction-row justify-content-between'>
                                            <li><a className='btn cart-btn'><i class="bi bi-cart me-1"></i> Add To Bag</a></li>
                                            <li><a className='btn view-btn'><i class="bi bi-arrows-fullscreen me-1"></i> Quick View</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <ul className='d-flex flex-direction-row justify-content-between'>
                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                        <li className='rounded-circle'><div className='product-color'></div></li>
                                    </ul>
                                    <h5 class="card-title mt-4">Xiaomi Pad 6</h5>
                                    <p class="card-text">Redmi Pad SE| All Day Battery</p>
                                    <div className='d-flex justify-content-between align-items-baseline'>
                                        <a href="#" class="buy-btn">Buy Now</a>
                                        <div className='reviews'>
                                            <i class="bi bi-star-fill me-1"></i>
                                            <span>
                                                4.9 (89 reviews)
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ShoppingCart