import React, { useState } from 'react'
import './ShoppingCart.css'



function ShoppingCart() {
    const [number, setNumber] = useState(1);
    const increment = () => setNumber(prevNumber => prevNumber + 1);
    const decrement = () => setNumber(prevNumber => (prevNumber > 1 ? prevNumber - 1 : prevNumber));

    const [toggle, setToggle] = useState(1);
    const dileveryBtn = (btn) => {
        setToggle(btn);
    }


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

            <section className='container  my-5 py-5 '>
                <div className='row '>
                    <div className='col-lg-8 col-12 pe-lg-5'>

                        <div className='border-start-0 border-end-0 row px-2 py-3  border'>
                            <div className='col-6 col-lg-3 '>
                                <div className='  fit-content  '>
                                    <img src='../images/tshirt_no_bg.png ' className='SC-img-h rounded border border-2' />
                                </div>
                            </div>
                            <div className='col-lg-5 col-6 py-auto d-flex flex-column justify-content-center'>
                                <h6 className='fs-5 text-secondary'>Relaxd Tshirt</h6>
                                <div className='d-flex'>
                                    <div className='fit-content text-secondary fs-6'>$12.99 <span className='px-md-1'>|</span></div>
                                    <div className='fit-content '>
                                        <span class="badge text-success fs-6">In Stock</span>
                                    </div>
                                </div>
                                <div className='row pt-3'>
                                    <div className='col-lg-4 col-6 mb-1'>
                                        <select class="custom-select px-md-1 py-2  w-100 border border-2 text-secondary rounded" id="inputSelectsize">
                                            <option selected>XL</option>
                                            <option value="1">L</option>
                                            <option value="2">M</option>
                                            <option value="3">S</option>
                                        </select>
                                    </div>
                                    <div className='col-lg-4 col-6 mb-1'>
                                        <select class="custom-select border  border-2 text-secondary px-md-1 py-2 w-100 rounded" id="inputSelectColor">
                                            <option selected>Blue</option>
                                            <option value="1">Red</option>
                                            <option value="2">Black</option>
                                            <option value="3">Green</option>
                                        </select>

                                    </div>

                                    <div className='col-lg-4 mb-1'>
                                        <div className='border border-2 d-flex mt-1 mt-md-0 justify-content-evenly rounded'>
                                            <button onClick={decrement} className='border-0 bg-white  fs-4 text-secondary'>-</button>
                                            <span className=' text-secondary pt-1' >{number}</span>
                                            <button onClick={increment} className='border-0 bg-white fs-4 text-secondary'>+</button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className='col-lg-4 col-12 d-flex flex-column justify-content-center '>
                                <div className='row pt-2 pt-md-0'>
                                    <p className='fs-4 col-6 col-lg-12 fw-semibold text-lg-end ps-3 ps-lg-0 '>$12.99</p>
                                    <div className='d-flex col-6 col-lg-12 justify-content-end pt-lg-4'>
                                        <button type="button" class="btn text-secondary"><i class="bi bi-heart-fill pe-2"></i>Save</button>
                                        <p className='text-secondary pt-2'>|</p>
                                        <button type="button" class="btn text-secondary pe-0"><i class="bi bi-trash-fill pe-2"></i>Delete</button>
                                    </div>

                                </div>

                            </div>


                        </div>

                        <div className='border-start-0 border-end-0 row px-2 py-3 border'>
                            <div className='col-6 col-lg-3 '>
                                <div className='  fit-content  '>
                                    <img src='../images/tshirt_no_bg.png ' className='SC-img-h rounded border border-2' />
                                </div>
                            </div>
                            <div className='col-lg-5 col-6 py-auto d-flex flex-column justify-content-center'>
                                <h6 className='fs-5 text-secondary'>Relaxd Tshirt</h6>
                                <div className='d-flex'>
                                    <div className='fit-content text-secondary fs-6'>$12.99 <span className='px-md-1'>|</span></div>
                                    <div className='fit-content '>
                                        <span class="badge text-success fs-6">In Stock</span>
                                    </div>
                                </div>
                                <div className='row pt-3'>
                                    <div className='col-lg-4 col-6 mb-1'>
                                        <select class="custom-select px-md-1 py-2  w-100 border border-2 text-secondary rounded" id="inputSelectsize">
                                            <option selected>XL</option>
                                            <option value="1">L</option>
                                            <option value="2">M</option>
                                            <option value="3">S</option>
                                        </select>
                                    </div>
                                    <div className='col-lg-4 col-6 mb-1'>
                                        <select class="custom-select border  border-2 text-secondary px-md-1 py-2 w-100 rounded" id="inputSelectColor">
                                            <option selected>Blue</option>
                                            <option value="1">Red</option>
                                            <option value="2">Black</option>
                                            <option value="3">Green</option>
                                        </select>

                                    </div>

                                    <div className='col-lg-4 mb-1'>
                                        <div className='border border-2 d-flex mt-1 mt-md-0 justify-content-evenly rounded'>
                                            <button onClick={decrement} className='border-0 bg-white  fs-4 text-secondary'>-</button>
                                            <span className=' text-secondary pt-1' >{number}</span>
                                            <button onClick={increment} className='border-0 bg-white fs-4 text-secondary'>+</button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className='col-lg-4 col-12 d-flex flex-column justify-content-center '>
                                <div className='row pt-2 pt-md-0'>
                                    <p className='fs-4 col-6 col-lg-12 fw-semibold text-lg-end ps-3 ps-lg-0 '>$12.99</p>
                                    <div className='d-flex col-6 col-lg-12 justify-content-end pt-lg-4'>
                                        <button type="button" class="btn text-secondary"><i class="bi bi-heart-fill pe-2"></i>Save</button>
                                        <p className='text-secondary pt-2'>|</p>
                                        <button type="button" class="btn text-secondary pe-0"><i class="bi bi-trash-fill pe-2"></i>Delete</button>
                                    </div>

                                </div>

                            </div>


                        </div>

                        <div className='border-start-0 border-end-0 row px-2 py-3  border'>
                            <div className='col-6 col-lg-3 '>
                                <div className='  fit-content  '>
                                    <img src='../images/tshirt_no_bg.png ' className='SC-img-h rounded border border-2' />
                                </div>
                            </div>
                            <div className='col-lg-5 col-6 py-auto d-flex flex-column justify-content-center'>
                                <h6 className='fs-5 text-secondary'>Relaxd Tshirt</h6>
                                <div className='d-flex'>
                                    <div className='fit-content text-secondary fs-6'>$12.99 <span className='px-md-1'>|</span></div>
                                    <div className='fit-content '>
                                        <span class="badge text-success fs-6">In Stock</span>
                                    </div>
                                </div>
                                <div className='row pt-3'>
                                    <div className='col-lg-4 col-6 mb-1'>
                                        <select class="custom-select px-md-1 py-2  w-100 border border-2 text-secondary rounded" id="inputSelectsize">
                                            <option selected>XL</option>
                                            <option value="1">L</option>
                                            <option value="2">M</option>
                                            <option value="3">S</option>
                                        </select>
                                    </div>
                                    <div className='col-lg-4 col-6 mb-1'>
                                        <select class="custom-select border  border-2 text-secondary px-md-1 py-2 w-100 rounded" id="inputSelectColor">
                                            <option selected>Blue</option>
                                            <option value="1">Red</option>
                                            <option value="2">Black</option>
                                            <option value="3">Green</option>
                                        </select>

                                    </div>

                                    <div className='col-lg-4 mb-1'>
                                        <div className='border border-2 d-flex mt-1 mt-md-0 justify-content-evenly rounded'>
                                            <button onClick={decrement} className='border-0 bg-white  fs-4 text-secondary'>-</button>
                                            <span className=' text-secondary pt-1' >{number}</span>
                                            <button onClick={increment} className='border-0 bg-white fs-4 text-secondary'>+</button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className='col-lg-4 col-12 d-flex flex-column justify-content-center '>
                                <div className='row pt-2 pt-md-0'>
                                    <p className='fs-4 col-6 col-lg-12 fw-semibold text-lg-end ps-3 ps-lg-0 '>$12.99</p>
                                    <div className='d-flex col-6 col-lg-12 justify-content-end pt-lg-4'>
                                        <button type="button" class="btn text-secondary"><i class="bi bi-heart-fill pe-2"></i>Save</button>
                                        <p className='text-secondary pt-2'>|</p>
                                        <button type="button" class="btn text-secondary pe-0"><i class="bi bi-trash-fill pe-2"></i>Delete</button>
                                    </div>

                                </div>

                            </div>


                        </div>

                        <div className='border-start-0 border-end-0 border py-3  row px-2 '>
                            <div className='col-6 col-lg-3 '>
                                <div className='  fit-content  '>
                                    <img src='../images/tshirt_no_bg.png ' className='SC-img-h rounded border border-2' />
                                </div>
                            </div>
                            <div className='col-lg-5 col-6 py-auto d-flex flex-column justify-content-center'>
                                <h6 className='fs-5 text-secondary'>Relaxd Tshirt</h6>
                                <div className='d-flex'>
                                    <div className='fit-content text-secondary fs-6'>$12.99 <span className='px-md-1'>|</span></div>
                                    <div className='fit-content '>
                                        <span class="badge text-success fs-6">In Stock</span>
                                    </div>
                                </div>
                                <div className='row pt-3'>
                                    <div className='col-lg-4 col-6 mb-1'>
                                        <select class="custom-select px-md-1 py-2  w-100 border border-2 text-secondary rounded" id="inputSelectsize">
                                            <option selected>XL</option>
                                            <option value="1">L</option>
                                            <option value="2">M</option>
                                            <option value="3">S</option>
                                        </select>
                                    </div>
                                    <div className='col-lg-4 col-6 mb-1'>
                                        <select class="custom-select border  border-2 text-secondary px-md-1 py-2 w-100 rounded" id="inputSelectColor">
                                            <option selected>Blue</option>
                                            <option value="1">Red</option>
                                            <option value="2">Black</option>
                                            <option value="3">Green</option>
                                        </select>

                                    </div>

                                    <div className='col-lg-4 mb-1'>
                                        <div className='border border-2 d-flex mt-1 mt-md-0 justify-content-evenly rounded'>
                                            <button onClick={decrement} className='border-0 bg-white  fs-4 text-secondary'>-</button>
                                            <span className=' text-secondary pt-1' >{number}</span>
                                            <button onClick={increment} className='border-0 bg-white fs-4 text-secondary'>+</button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div className='col-lg-4 col-12 d-flex flex-column justify-content-center '>
                                <div className='row pt-2 pt-md-0'>
                                    <p className='fs-4 col-6 col-lg-12 fw-semibold text-lg-end ps-3 ps-lg-0 '>$12.99</p>
                                    <div className='d-flex col-6 col-lg-12 justify-content-end pt-lg-4'>
                                        <button type="button" class="btn text-secondary"><i class="bi bi-heart-fill pe-2"></i>Save</button>
                                        <p className='text-secondary pt-2'>|</p>
                                        <button type="button" class="btn text-secondary pe-0"><i class="bi bi-trash-fill pe-2"></i>Delete</button>
                                    </div>

                                </div>

                            </div>


                        </div>


                    </div>

                    <div className='flex-1 col-lg-4 px-4 px-lg-0 py-5'>
                        <div className='  position-sticky top' id='mydiv'>
                            <h5 className='text-secondary'>Delivery</h5>
                            <div class="border fit-content rounded my-3">
                                <button type="button" onClick={() => dileveryBtn(1)} class={toggle === 1 ? ' btn btn-secondary fs-7' : 'btn btn-light fs-7'} >Free</button>
                                <button type="button" onClick={() => dileveryBtn(2)} class={toggle === 2 ? ' btn btn-secondary fs-7' : 'btn btn-light fs-7'} >Express :$99</button>
                            </div>

                            <p className='text-secondary fs-7'>Delivery date : June 24 ,2026</p>
                            <hr></hr>
                            <div class="input-group mb-3">
                                <input type="text" class="form-control rounded" placeholder="Promocode" />
                                <span class="input-group-text rounded" id="apply">Apply</span>
                            </div>
                            <p className='text-secondary fs-7'>20% off discount</p>
                            <hr></hr>

                            <div className='row '>
                                <p className='col-9 '>Subtotal</p>
                                <p className='col-3 '>$249.00</p>
                            </div>
                            <div className='row '>
                                <p className='col-9 text-secondary  fs-7'>Disscont</p>
                                <p className='col-3 text-secondary fs-7'>$249.00</p>
                            </div>
                            <div className='row '>
                                <p className='col-9 text-secondary  fs-7'>Delivery <span class="badge text-bg-secondary rounded-circle fw-bold">i</span></p>
                                <p className='col-3 text-secondary fs-7'>$249.00</p>
                            </div>
                            <div className='row'>
                                <p className='col-9  text-secondary  fs-7'>Tax <span class="badge text-bg-secondary rounded-circle fw-bold">i</span></p>
                                <p className='col-3 text-secondary fs-7'>$249.00</p>
                            </div>
                            <hr></hr>
                            <div className='row '>
                                <p className='col-9 '>Total</p>
                                <p className='col-3 '>$249.00</p>
                            </div>

                            <button type="button" className="btn CO-btn text-light w-100 rounded-pill py-2 my-2">Checkout</button>
                            <button type="button" className="btn btn-secondary w-100 rounded-pill py-2 my-2">Checkout</button>

                        </div>

                    </div>
                </div>




            </section>

        </>
    )
}







export default ShoppingCart
