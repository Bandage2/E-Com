import React from 'react'
import './ShoppingCart.css'



function ShoppingCart() {
    return (
        <>

            <h3 className='px-5 pt-5'>Shopping Cart</h3>

            <nav aria-label="breadcrumb" className='px-5'>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Clothing Categories</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Shopping Cart</li>
                </ol>
            </nav>

            <section className='container border-top border-bottom my-5 py-5 '>
                <div className='row '>
                    <div className='col-lg-8 col-12 pe-5 '>
                      <div className='row border-bottom py-5'>
                      <div className='bg-light col-lg-3 col-6 SC-img-h '>
                            <img src='../images/tshirt.jpeg ' className='SC-img-h '  />
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
                            <img src='../images/tshirt.jpeg ' className='SC-img-h '  />
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
                            <img src='../images/tshirt.jpeg ' className='SC-img-h '  />
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
                            <img src='../images/tshirt.jpeg ' className='SC-img-h '  />
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

        </>
    )
}

// const counter = document.getElementById('counter');
// const incrementButton = document.getElementById('increment');
// const decrementButton = document.getElementById('decrement');

// let count = 1;

// function updateCounter() {
//     counter.textContent = count;
// }

// incrementButton.addEventListener('click', () => {
//     count++;
//     updateCounter();
// });

// decrementButton.addEventListener('click', () => {
//     if (count > 1) {
//         count--;
//         updateCounter();
//     }
// });







export default ShoppingCart
