import React from 'react'
import './MyOrder.css'

function MyOrder() {
    return (
        <>
            <div className='container-fluid'>
                <h3 className='px-lg-5 pt-5'>Checkout</h3>

                <nav aria-label="breadcrumb" className='px-lg-5'>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Homepage</a></li>
                        <li class="breadcrumb-item"><a href="#">Clothing Categories</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Checkout</li>
                    </ol>
                </nav>
            </div>

            <section className='container border-top border-bottom  py-lg-5 '>
                <div className='row '>
                    <div className='col-lg-8 col-12 pe-lg-5 '>
                        <div class="accordion accordion-flush" id="accordionFlush">
                            <div class="accordion-item p-3 my-3 border rounded">
                                <div className='row pb-3'>
                                    <div className='col-lg-10 col-8'>
                                        <p className=' accordion-header' id="flush-headingOne"> CONTACT INFO <br></br>

                                        </p>
                                        <div className='d-lg-flex'>
                                            <div className='text-dark fs-7 fw-bold col-2'> Enrico Smith</div>
                                            <div className='text-dark fs-7 fw-bold col-10'>+855 - 666 - 7744</div>
                                        </div>
                                    </div>
                                    <div className='col-lg-2 col-4'>
                                        <button type="button " class="btn btn-light collapsed  px-3 fs-7" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">Change</button>
                                    </div>
                                </div>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlush">
                                    <div class="accordion-body px-0 pt-3 border-top">
                                        <div className='row'>
                                            <h5 className='col-8 fw-bold'>Contact infomation</h5>
                                            <p className='fs-7 col-4'>Do not have an account? <span className='text-primary'>Log in</span></p>
                                        </div>
                                        <form className='col-lg-10 col-12'>
                                            <div class="mb-3">
                                                <label for="InputPassword1" class="form-label  fs-7 ">Password</label>
                                                <input type="password" class="form-control" id="InputPassword1" />
                                            </div>
                                            <div class="mb-3">
                                                <label for="InputEmail1" class="form-label fs-7 ">Email address</label>
                                                <input type="email" class="form-control" id="InputEmail1" />
                                            </div>
                                            <div class="mb-3 form-check">
                                                <input type="checkbox" class="form-check-input" id="Check1" />
                                                <label class="form-check-label fs-7" for="Check1">Email me news and offers</label>
                                            </div>
                                            <div className='row'>
                                                <div className=' col-lg-6 col-8'><button type="button" class="btn CO-btn text-light w-100  rounded-pill ">Save and next to Shipping</button></div>
                                                <div className=' col-lg-3 col-4'><button type="button" class="btn btn-light">Cancle</button></div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item p-3 my-3 border rounded">

                                <div className='row pb-3'>
                                    <div className='col-lg-10 col-8'>
                                        <p className=' accordion-header' id="flush-headingOne"> SHIPPING ADDRESS <br></br>

                                        </p>
                                        <div className='row'>
                                            <div className='text-dark fs-7 fw-bold '> St. Paul's Road, Norris, SD 57560, Dakota, USA</div>

                                        </div>
                                    </div>
                                    <div className='col-lg-2 col-4'>
                                        <button type="button " class="btn btn-light  collapsed  px-3 fs-7" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">Change</button>

                                    </div>
                                </div>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlush">
                                    <div class="accordion-body">
                                        <form>
                                            <div class="mb-3 row">
                                                <div className='col-lg-6'>
                                                    <label for="InputEmail1" class="form-label">First name</label>
                                                    <input type="text" class="form-control" id="InputEmail1" />
                                                </div>

                                                <div className='col-lg-6'>
                                                    <label for="InputEmail1" class="form-label">Last name</label>
                                                    <input type="text" class="form-control" id="InputEmail1" />
                                                </div>
                                            </div>
                                            <div class="mb-3 row">
                                                <div className='col-lg-6'>
                                                    <label for="InputEmail1" class="form-label">Address</label>
                                                    <input type="text" class="form-control" id="InputEmail1" />
                                                </div>

                                                <div className='col-lg-6'>
                                                    <label for="InputEmail1" class="form-label">Apt, Suite</label>
                                                    <input type="text" class="form-control" id="InputEmail1" />
                                                </div>
                                            </div>
                                            <div class="mb-3 row">
                                                <div className='col-lg-6'>
                                                    <label for="InputEmail1" class="form-label">City</label>
                                                    <input type="text" class="form-control" id="InputEmail1" />
                                                </div>

                                                <div className='col-lg-6'>
                                                    <label for="InputEmail1" class="form-label">Country</label>
                                                    <input type="text" class="form-control" id="InputEmail1" />
                                                </div>
                                            </div>
                                            <div class="mb-3 row">
                                                <div className='col-lg-6'>
                                                    <label for="InputEmail1" class="form-label">State/Province</label>
                                                    <input type="text" class="form-control" id="InputEmail1" />
                                                </div>

                                                <div className='col-lg-6'>
                                                    <label for="InputEmail1" class="form-label">Postal code</label>
                                                    <input type="text" class="form-control" id="InputEmail1" />
                                                </div>
                                            </div>
                                            <div class="mb-3 row ">
                                                <div class="form-check col-lg-6 px-5">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                    <label class="form-check-label" for="flexRadioDefault1">
                                                        Home
                                                    </label>
                                                </div>
                                                <div class="form-check col-lg-6 px-5">
                                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                                    <label class="form-check-label" for="flexRadioDefault2">
                                                        Office(9am-5pm)
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className=' col-lg-6 col-8'><button type="button" class="btn CO-btn text-light w-100  rounded-pill ">Save and next to Payment</button></div>
                                                <div className=' col-lg-3 col-4'><button type="button" class="btn btn-light">Cancle</button></div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item p-3 my-3 border rounded">


                                <div className='row'>
                                    <div className='col-lg-10 col-8'>
                                        <p className=' accordion-header' id="flush-headingOne"> PAYMENT METHOD <br></br>

                                        </p>
                                        <div className='row'>
                                            <div className='text-dark fs-7 fw-bold '>Google / Apple Walletxxx-xxx-xx55 </div>

                                        </div>
                                    </div>
                                    <div className='col-lg-2 col-4'>
                                        <button type="button " class="btn btn-light  collapsed  px-3 fs-7" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">Change</button>
                                    </div>
                                </div>
                                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlush">
                                    <div class="accordion-body px-0 px-lg-4">
                                      
                                            <div class="form-check">
                                                <input class="form-check-input collapsed " type="radio" name="flexRadio" id="flexRadio1" data-bs-toggle="collapse" data-bs-target="#collapse31" aria-expanded="false" aria-controls="flush-collapse1" />
                                                <label class="form-check-label border-none w-100" for="flexRadio1">
                                                    <div class="accordion-item border-0">
                                                        <h5 class="" >
                                                            Debit / Credit Card
                                                        </h5>

                                                    </div>

                                                </label>
                                                <div id="collapse31" class="accordion-collapse collapse" aria-labelledby="flush-heading1" data-bs-parent="#accordionFlush">
                                                    <div class="accordion-body px-0 px-lg-2">
                                                        <div class="mb-3 row">
                                                            <div class="mb-3">
                                                                <label for="cardname" class="form-label  fs-7 ">Card number</label>
                                                                <input type="int" class="form-control" id="Inputcardnum" />
                                                            </div>
                                                            <div class="mb-3">
                                                                <label for="InputEmail1" class="form-label fs-7 ">Name on Card</label>
                                                                <input type="text" class="form-control" id="InputEcardname" />
                                                            </div>
                                                            <div className='col-lg-6'>
                                                                <label for="Expirationdate" class="form-label">Expiration date (MM/YY)</label>
                                                                <input type="date" class="form-control" id="InputExp" />
                                                            </div>

                                                            <div className='col-lg-6'>
                                                                <label for="CVC" class="form-label">CVC</label>
                                                                <input type="text" class="form-control" id="InputCVC" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input  collapsed" type="radio" name="flexRadio" id="flexRadio2" data-bs-toggle="collapse" data-bs-target="#collapse32" aria-expanded="false" aria-controls="flush-collapse2" />
                                                <label class="form-check-label w-100" for="flexRadio2">
                                                    <div class="accordion-item border-0">
                                                        <h5 class="" >
                                                            Internet banking
                                                        </h5>

                                                    </div>
                                                </label>
                                                <div id="collapse32" class="accordion-collapse collapse" aria-labelledby="flush-heading2" data-bs-parent="#accordionFlush">
                                                    <div class="accordion-body px-0">
                                                        <p>Your order will be delivered to you after you transfer to:</p>
                                                        <h5 className='fw-bold'>
                                                            ChisNghiax
                                                        </h5>
                                                        <p>
                                                            Bank name:<spam className="fw-bold">Example Bank Name</spam>
                                                        </p>
                                                        <p>
                                                            Account number:<spam className="fw-bold">855578888</spam>
                                                        </p>
                                                        <p>
                                                            Sort code:<spam className="fw-bold">Eme</spam>
                                                        </p>
                                                        <p>
                                                            IBAN:<spam className="fw-bold">EName</spam>
                                                        </p>
                                                        <p>
                                                            BIC:<spam className="fw-bold">Eme</spam>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-check">
                                                <input class="form-check-input  collapsed" type="radio" name="flexRadio" id="flexRadio3" data-bs-toggle="collapse" data-bs-target="#collapse33" aria-expanded="false" aria-controls="flush-collapse33" />
                                                <label class="form-check-label w-100" for="flexRadio3">
                                                    <div class="accordion-item border-0">
                                                        <h5 class="" >
                                                            Google / Apple Wallet
                                                        </h5>

                                                    </div>
                                                </label>
                                                <div id="collapse33" class="accordion-collapse collapse" aria-labelledby="flush-heading33" data-bs-parent="#accordionFlush">
                                                    <div class="accordion-body px-0">orem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolore quod quas fugit perspiciatis architecto, temporibus quos ducimus libero explicabo?

                                                    </div>
                                                </div>





                                            </div>
                                            <div className='row'>
                                                <div className=' col-lg-6 col-8'><button type="button" class="btn CO-btn text-light w-100  rounded-pill ">Confirm order</button></div>
                                                <div className=' col-lg-3 col-4'><button type="button" class="btn btn-light">Cancle</button></div>
                                            </div>
                                  
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>

                    <div className='col-lg-4 py-5 col-12'>
                        <h5 className=' fw-bold'>Order Summary</h5>
                        <div className='row border-bottom py-5'>
                            <div className='bg-light col-4 MO-img-h  '>
                                <img src='../images/tshirt.jpeg ' className='MO-img-h ' />
                            </div>
                            <div className='col-5 lh-sm'>
                                <p className='fw-bold '>Rey Nylon Backpack</p>
                                <div className='row lh-sm'>
                                    <p className='col-6 border-end text-secondary fs-7'>Black</p>
                                    <p className='col-6 text-secondary fs-7'>2xl</p>
                                </div>


                                <button class="button id-btn me-2" id="decrement">-</button>
                                <span class="number" id="counter">1</span>
                                <button class="button id-btn ms-2" id="increment">+</button>
                            </div>


                            <div className='col-3 ms-auto'>
                                <button type="button" class="btn btn-outline-success">$74</button><br></br>
                                <button type="button" class="btn btn-outline-none text-primary px-0 mtr">Remove</button>
                            </div>

                        </div>

                        <div className='row border-bottom py-5'>
                            <div className='bg-light col-4 MO-img-h  '>
                                <img src='../images/tshirt.jpeg ' className='MO-img-h ' />
                            </div>
                            <div className='col-5 lh-sm'>
                                <p className='fw-bold '>Rey Nylon Backpack</p>
                                <div className='row lh-sm'>
                                    <p className='col-6 border-end text-secondary fs-7'>Black</p>
                                    <p className='col-6 text-secondary fs-7'>2xl</p>
                                </div>


                                <button class="button id-btn me-2" id="decrement">-</button>
                                <span class="number" id="counter">1</span>
                                <button class="button id-btn ms-2" id="increment">+</button>
                            </div>


                            <div className='col-3 ms-auto'>
                                <button type="button" class="btn btn-outline-success">$74</button><br></br>
                                <button type="button" class="btn btn-outline-none text-primary px-0 mtr">Remove</button>
                            </div>

                        </div>
                        <div className='row border-bottom py-5'>
                            <div className='bg-light col-4 MO-img-h  '>
                                <img src='../images/tshirt.jpeg ' className='MO-img-h ' />
                            </div>
                            <div className='col-5 lh-sm'>
                                <p className='fw-bold '>Rey Nylon Backpack</p>
                                <div className='row lh-sm'>
                                    <p className='col-6 border-end text-secondary fs-7'>Black</p>
                                    <p className='col-6 text-secondary fs-7'>2xl</p>
                                </div>


                                <button class="button id-btn me-2" id="decrement">-</button>
                                <span class="number" id="counter">1</span>
                                <button class="button id-btn ms-2" id="increment">+</button>
                            </div>


                            <div className='col-3 ms-auto'>
                                <button type="button" class="btn btn-outline-success">$74</button><br></br>
                                <button type="button" class="btn btn-outline-none text-primary px-0 mtr">Remove</button>
                            </div>

                        </div>

                        <div>
                            <h6 className='pt-4'>
                                Discount code
                            </h6>
                            <div className='row pb-3'>
                                <div className='col-9'>  <input type="text" class="form-control " id="Discount-id" /></div>
                                <button type="button" class="btn btn-light col-2">Apply</button>
                            </div>
                            <div className='row'>
                                <p className='col-9 text-secondary'>Subtotal</p>
                                <p className='col-3 fw-bold'>$249.00</p>
                            </div>
                            <div className='row '>
                                <p className='col-9 text-secondary'>Shopping estimate</p>
                                <p className='col-3 fw-bold'>$249.00</p>
                            </div>
                            <div className='row '>
                                <p className='col-9 text-secondary'>Tax estimate</p>
                                <p className='col-3 fw-bold'>$249.00</p>
                            </div>
                            <div className='row '>
                                <p className='col-9 fw-bold'>Order total</p>
                                <p className='col-3 fw-bold'>$249.00</p>
                            </div>

                            <button type="button" class="btn CO-btn text-light w-100 rounded-pill py-2 my-2">Checkout</button>

                        </div>

                    </div>
                </div>




            </section>

        </>
    )
}

export default MyOrder
