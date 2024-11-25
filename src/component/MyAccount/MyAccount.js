import React from 'react'
import { Link } from 'react-router-dom'
import './MyAccount.css'



function MyAccount() {
    return (
        <>
            <div class="container1">
                <div className='border-top border-bottom mt-5'>
                    <div class=" mt-3 scroll">
                        <ul class=" nav  navbar-list nav_color" id="myTab" role="tablist">
                            <li className="nav-item overflow-hidden" role="presentation">
                                <a class="nav-link active nav_color" aria-current="page" id="account-tab" data-bs-toggle="tab" data-bs-target="#account" type="button" role="tab" aria-controls="home" aria-selected="true">Account info</a>
                            </li>
                            <li class="nav-item  overflow-hidden" role="presentation">
                                <a class="nav-link nav_color" href="#" id="save_list-tab" data-bs-toggle="tab" data-bs-target="#savelist" type="button" role="tab" aria-controls="home" aria-selected="false">Save lists</a>
                            </li>
                            <li class="nav-item  overflow-hidden" role="presentation">
                                <a class="nav-link nav_color" href="#" id="order-tab" data-bs-toggle="tab" data-bs-target="#myorder" type="button" role="tab" aria-controls="home" aria-selected="false">My order</a>
                            </li>
                            <li class="nav-item  overflow-hidden" role="presentation">
                                <a class="nav-link nav_color" href="#" id="password-tab" data-bs-toggle="tab" data-bs-target="#password" type="button" role="tab" aria-controls="home" aria-selected="false">Change password</a>
                            </li>
                            <li class="nav-item  overflow-hidden" role="presentation">
                                <a class="nav-link nav_color" href="#" id="bill-tab" data-bs-toggle="tab" data-bs-target="#billing" type="button" role="tab" aria-controls="home" aria-selected="false">Change Billing</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>



            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id='account' role="tabpanel" aria-labelledby="home-tab">
                    <div class="container mx-auto col-lg-6 ">
                        <div class="container2 mt-5 p-3 text-start ">
                            <h1>Account infomation</h1>
                            <div class="img_circle rounded-circle mt-5 p-3">
                                <img src="" alt="user-img"></img>
                            </div>

                            <form>
                                <div class="mb-3 mt-4">
                                    <label for="InputEmail1" class="form-label">Full name</label>
                                    <input type="text" class="form-control" id="name" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="InputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="InputPassword1" class="form-label">Date of birth</label>
                                    <input type="date" class="form-control" id="account-date" />
                                </div>
                                <div class="mb-3">
                                    <label for="InputPassword1" class="form-label">Address</label>
                                    <input type="text" class="form-control" id="account-address" />
                                </div>
                                <div class="mb-3">
                                    <label for="InputPassword1" class="form-label">Gender</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                        <option value="3">Other</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="InputPassword1" class="form-label">Phone number</label>
                                    <input type="tel" class="form-control" id="account-phone" />
                                </div>
                                <div class="text mb-3">
                                    <label for="InputPassword1" class="form-label">About you</label>
                                    <input type="text" class="form-control" id="account-about" />
                                </div>
                                <div class="d-grid gap-2 col-lg-6 mx-auto">
                                    <button type="submit" class="btn btn-dark rounded-pill">Update account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id='savelist' role="tabpanel" aria-labelledby="profile-tab">
                    {/* ----------------------------------------save lists----------------------------------- */}

                    <div class="container mx-auto col-lg-6 mb-5 mt-5 gy-5" >
                        <div class="container2 mt-5 p-3 text-start">
                            <h1>List of saved products</h1>
                        </div>

                        <div className='row'>
                            <div className='col-lg-4 col-md-6 col-sm-12'>
                                <div class="card box">
                                    <div className="img-shape">
                                        <img src="./images/fx-1.png" class="card-img-top" alt="..." />
                                        <div className='layer position-relative d-flex justify-content-center'>
                                            <button type="button" class="btn btn-light">S</button>
                                            <button type="button" class="btn btn-light">M</button>
                                            <button type="button" class="btn btn-light">L</button>
                                            <button type="button" class="btn btn-light">XL</button>
                                            <button type="button" class="btn btn-light">XXL</button>
                                        </div>
                                    </div>
                                    <div class="card-body bg-white">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">text here!!!!</p>
                                        {/* <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> */}
                                        <div class="row bt-size">
                                            <div className='col-4'>
                                                <button type="button" class="btn btn-outline-success border border-3 border-success"><p>1000/Rs</p></button>
                                            </div>
                                            <p class="col-8  text-end text-size"><i class="fa-solid fa-star text-warning"></i>3.4<br></br>(98 reviews)</p>
                                        </div>

                                    </div>
                                </div>
                            </div>


                            <div className='col-lg-4 col-md-6 col-sm-12 mb-5'>
                                <div class="card box">
                                    <div className="img-shape">
                                        <img src="./images/fx-1.png" class="card-img-top" alt="..." />
                                        <div className='layer position-relative d-flex justify-content-center'>
                                            <button type="button" class="btn btn-light">S</button>
                                            <button type="button" class="btn btn-light">M</button>
                                            <button type="button" class="btn btn-light">L</button>
                                            <button type="button" class="btn btn-light">XL</button>
                                            <button type="button" class="btn btn-light">XXL</button>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">text here!!!!</p>
                                        <div class="row bt-size">
                                            <div className='col-4'>
                                                <button type="button" class="btn btn-outline-success border border-3 border-success"><p>1000/Rs</p></button>
                                            </div>
                                            <p class="col-8  text-end text-size"><i class="fa-solid fa-star text-warning"></i>3.4<br></br>(98 reviews)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-12 mb-5'>
                                <div class="card box">
                                    <div className="img-shape">
                                        <img src="./images/fx-1.png" class="card-img-top" alt="..." />
                                        <div className='layer position-relative d-flex justify-content-center'>
                                            <button type="button" class="btn btn-light">S</button>
                                            <button type="button" class="btn btn-light">M</button>
                                            <button type="button" class="btn btn-light">L</button>
                                            <button type="button" class="btn btn-light">XL</button>
                                            <button type="button" class="btn btn-light">XXL</button>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">text here!!!!</p>
                                        <div class="row bt-size">
                                            <div className='col-4'>
                                                <button type="button" class="btn btn-outline-success border border-3 border-success"><p>1000/Rs</p></button>
                                            </div>
                                            <p class="col-8  text-end text-size"><i class="fa-solid fa-star text-warning"></i>3.4<br></br>(98 reviews)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-12 mb-5'>
                                <div class="card box">
                                    <div className="img-shape">
                                        <img src="./images/fx-1.png" class="card-img-top" alt="..." />
                                        <div className='layer position-relative d-flex justify-content-center'>
                                            <button type="button" class="btn btn-light">S</button>
                                            <button type="button" class="btn btn-light">M</button>
                                            <button type="button" class="btn btn-light">L</button>
                                            <button type="button" class="btn btn-light">XL</button>
                                            <button type="button" class="btn btn-light">XXL</button>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">text here!!!!</p>
                                        <div class="row bt-size">
                                            <div className='col-4'>
                                                <button type="button" class="btn btn-outline-success border border-3 border-success"><p>1000/Rs</p></button>
                                            </div>
                                            <p class="col-8  text-end text-size"><i class="fa-solid fa-star text-warning"></i>3.4<br></br>(98 reviews)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-12 mb-5'>
                                <div class="card box">
                                    <div className="img-shape">
                                        <img src="./images/fx-1.png" class="card-img-top" alt="..." />
                                        <div className='layer position-relative d-flex justify-content-center'>
                                            <button type="button" class="btn btn-light">S</button>
                                            <button type="button" class="btn btn-light">M</button>
                                            <button type="button" class="btn btn-light">L</button>
                                            <button type="button" class="btn btn-light">XL</button>
                                            <button type="button" class="btn btn-light">XXL</button>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">text here!!!!</p>
                                        <div class="row bt-size">
                                            <div className='col-4'>
                                                <button type="button" class="btn btn-outline-success border border-3 border-success"><p>1000/Rs</p></button>
                                            </div>
                                            <p class="col-8  text-end text-size"><i class="fa-solid fa-star text-warning"></i>3.4<br></br>(98 reviews)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-6 col-sm-12 mb-5'>
                                <div class="card box">
                                    <div className="img-shape">
                                        <img src="./images/fx-1.png" class="card-img-top" alt="..." />
                                        <div className='layer position-relative d-flex justify-content-center'>
                                            <button type="button" class="btn btn-light">S</button>
                                            <button type="button" class="btn btn-light">M</button>
                                            <button type="button" class="btn btn-light">L</button>
                                            <button type="button" class="btn btn-light">XL</button>
                                            <button type="button" class="btn btn-light">XXL</button>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">text here!!!!</p>
                                        <div class="row bt-size">
                                            <div className='col-4'>
                                                <button type="button" class="btn btn-outline-success border border-3 border-success"><p>1000/Rs</p></button>
                                            </div>
                                            <p class="col-8 text-end text-size"><i class="fa-solid fa-star text-warning"></i>3.4<br></br>(98 reviews)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id='myorder' role="tabpanel" aria-labelledby="contact-tab">

                    {/* ---------------------------my order--------------------------- */}
                    <div class="container acc-grey mx-auto col-lg-6 mb-5" >
                        <div class="container2 mt-5 p-3 text-start ">
                            <h1>My Order</h1>
                        </div>

                        <div class="accordion " id="accordionExample">
                            <div class="accordion-item  border-0">
                                <h2 class="accordion-header border">
                                    <button class="accordion-button text-black" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                        <div className=' w-100' >

                                            <div className='row'>
                                                <div className='col-lg-8 col-5 ps-0 ps-md-2' >
                                                    <p className='fw-bold  fs-4 acc-heading-size'>Order ID : #123</p>
                                                </div>
                                                <div className='col-lg-4 col-7'>
                                                    <div className='row'>
                                                        <div className='col-lg-6 col-6 px-1 '>
                                                            <button type="button" class="btn btn-light border p-1 w-100 fs-7 px-auto">
                                                                <p className='d-md-flex mx-auto p-0 m-0'><i class="fa-solid d-none d-md-block  fa-file-invoice-dollar pe-2"></i>Invoice</p>
                                                            </button>
                                                        </div>
                                                        <div className='col-lg-6 col-6 px-1'>
                                                            <button type="button" class="btn btn-primary p-1 w-100 fs-7 d-flex px-auto"><p className='d-flex mx-auto p-0 m-0'>Track order <i class="fa-solid fa-location-crosshairs d-none d-md-block pt-1 ps-1"></i></p></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-lg-3 col-md-5 d-flex'>
                                                    <p className='text-secondary fs-7 mb-0'>Order Date:<span className='fw-bold'> July 19, 2024</span></p>
                                                    <p className='d-none d-lg-block m-0 p-0'>|</p>
                                                </div>
                                                <div className='col-lg-9 col-md-7'>
                                                    <p className='fs-7 fw-bold mb-0 delivery-color'><i class="fa-solid fa-truck me-1"></i>Estimated Delivery: Aug 17, 2024</p>

                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div className="row">
                                            <div className='col-lg-2 col-3 m-0 p-0'>
                                                <div className='fit-content'>
                                                    <img src="./images/fx-1.png" class="card-img-top img-size-acc border rounded" alt="..." /></div>
                                            </div>
                                            <div className='col-lg-7 col-7 d-flex flex-column justify-content-center ms-0 ps-md-0 ps-1'>
                                                <p className='mb-0'>MacBook Pro</p>
                                                <div className='d-flex text-secondary fs-7'>
                                                    <div className='fit-content '>
                                                        <p className='m-0 pe-md-2 pe-1'>Space Grey</p>
                                                    </div>
                                                    <div className='fit-content border border-top-0 border-bottom-0 border-secondary'>
                                                        <p className='m-0 px-md-2 px-1'>32 gb</p>
                                                    </div>
                                                    <div className='fit-content'>
                                                        <p className='m-0 px-md-2 ps-1 '>1TB</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-2 p-0 text-end d-flex flex-column justify-content-center'>
                                                <p className='fw-bold f-8 mb-0'>1000/Rs</p>
                                                <p className='m-0 text-secondary fs-7'>Qty:1</p>
                                            </div>

                                            <hr className='text-secondary my-3'></hr>
                                            <div className='row'>
                                                <div className='col-6'>
                                                    <p className='fw-bold f-8'>Payment</p>
                                                    <p className='f-9'>MacBook Pro</p>
                                                </div>
                                                <div className='col-6'>
                                                    <p className='fw-bold f-8'>Delivery</p>
                                                    <p className='m-0 pe-2  text-secondary fs-7'>Address</p>
                                                    <p className='m-0 f-9'>abcd, flat no.4</p>
                                                    <p className='m-0 f-9'>jaipur</p>
                                                    <p className='m-0 f-9'>3654 3654 3654</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item border-0">
                                <h2 class="accordion-header border">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <div className=' w-100' >

                                            <div className='row'>
                                                <div className='col-lg-8 col-5 ps-0 ps-md-2' >
                                                    <p className='fw-bold  fs-4 acc-heading-size'>Order ID : #123</p>
                                                </div>
                                                <div className='col-lg-4 col-7'>
                                                    <div className='row'>
                                                        <div className='col-lg-6 col-6 px-1 '>
                                                            <button type="button" class="btn btn-light border p-1 w-100 fs-7 px-auto">
                                                                <p className='d-md-flex mx-auto p-0 m-0'><i class="fa-solid d-none d-md-block  fa-file-invoice-dollar pe-2"></i>Invoice</p>
                                                            </button>
                                                        </div>
                                                        <div className='col-lg-6 col-6 px-1'>
                                                            <button type="button" class="btn btn-primary p-1 w-100 fs-7 d-flex px-auto"><p className='d-flex mx-auto p-0 m-0'>Track order <i class="fa-solid fa-location-crosshairs d-none d-md-block pt-1 ps-1"></i></p></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-lg-3 col-md-5 d-flex'>
                                                    <p className='text-secondary fs-7 mb-0'>Order Date:<span className='fw-bold'> July 19, 2024</span></p>
                                                    <p className='d-none d-lg-block m-0 p-0'>|</p>
                                                </div>
                                                <div className='col-lg-9 col-md-7'>
                                                    <p className='fs-7 fw-bold mb-0 delivery-color'><i class="fa-solid fa-truck me-1"></i>Estimated Delivery: Aug 17, 2024</p>

                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div className="row">
                                            <div className='col-lg-2 col-3 m-0 p-0'>
                                                <div className='fit-content'>
                                                    <img src="./images/fx-1.png" class="card-img-top img-size-acc border rounded" alt="..." /></div>
                                            </div>
                                            <div className='col-lg-7 col-7 d-flex flex-column justify-content-center ms-0 ps-md-0 ps-1'>
                                                <p className='mb-0'>MacBook Pro</p>
                                                <div className='d-flex text-secondary fs-7'>
                                                    <div className='fit-content '>
                                                        <p className='m-0 pe-md-2 pe-1'>Space Grey</p>
                                                    </div>
                                                    <div className='fit-content border border-top-0 border-bottom-0 border-secondary'>
                                                        <p className='m-0 px-md-2 px-1'>32 gb</p>
                                                    </div>
                                                    <div className='fit-content'>
                                                        <p className='m-0 px-md-2 ps-1 '>1TB</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-2 p-0 text-end d-flex flex-column justify-content-center'>
                                                <p className='fw-bold f-8 mb-0'>1000/Rs</p>
                                                <p className='m-0 text-secondary fs-7'>Qty:1</p>
                                            </div>

                                            <hr className='text-secondary my-3'></hr>
                                            <div className='row'>
                                                <div className='col-6'>
                                                    <p className='fw-bold f-8'>Payment</p>
                                                    <p className='f-9'>MacBook Pro</p>
                                                </div>
                                                <div className='col-6'>
                                                    <p className='fw-bold f-8'>Delivery</p>
                                                    <p className='m-0 pe-2  text-secondary fs-7'>Address</p>
                                                    <p className='m-0 f-9'>abcd, flat no.4</p>
                                                    <p className='m-0 f-9'>jaipur</p>
                                                    <p className='m-0 f-9'>3654 3654 3654</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item border-0">
                                <h2 class="accordion-header border">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <div className=' w-100' >

                                            <div className='row'>
                                                <div className='col-lg-8 col-5 ps-0 ps-md-2' >
                                                    <p className='fw-bold  fs-4 acc-heading-size'>Order ID : #123</p>
                                                </div>
                                                <div className='col-lg-4 col-7'>
                                                    <div className='row'>
                                                        <div className='col-lg-6 col-6 px-1 '>
                                                            <button type="button" class="btn btn-light border p-1 w-100 fs-7 px-auto">
                                                                <p className='d-md-flex mx-auto p-0 m-0'><i class="fa-solid d-none d-md-block  fa-file-invoice-dollar pe-2"></i>Invoice</p>
                                                            </button>
                                                        </div>
                                                        <div className='col-lg-6 col-6 px-1'>
                                                            <button type="button" class="btn btn-primary p-1 w-100 fs-7 d-flex px-auto"><p className='d-flex mx-auto p-0 m-0'>Track order <i class="fa-solid fa-location-crosshairs d-none d-md-block pt-1 ps-1"></i></p></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-lg-3 col-md-5 d-flex'>
                                                    <p className='text-secondary fs-7 mb-0'>Order Date:<span className='fw-bold'> July 19, 2024</span></p>
                                                    <p className='d-none d-lg-block m-0 p-0'>|</p>
                                                </div>
                                                <div className='col-lg-9 col-md-7'>
                                                    <p className='fs-7 fw-bold mb-0 delivery-color'><i class="fa-solid fa-truck me-1"></i>Estimated Delivery: Aug 17, 2024</p>

                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div class="accordion-body">
                                        <div className="row">
                                            <div className='col-lg-2 col-3 m-0 p-0'>
                                                <div className='fit-content'>
                                                    <img src="./images/fx-1.png" class="card-img-top img-size-acc border rounded" alt="..." /></div>
                                            </div>
                                            <div className='col-lg-7 col-7 d-flex flex-column justify-content-center ms-0 ps-md-0 ps-1'>
                                                <p className='mb-0'>MacBook Pro</p>
                                                <div className='d-flex text-secondary fs-7'>
                                                    <div className='fit-content '>
                                                        <p className='m-0 pe-md-2 pe-1'>Space Grey</p>
                                                    </div>
                                                    <div className='fit-content border border-top-0 border-bottom-0 border-secondary'>
                                                        <p className='m-0 px-md-2 px-1'>32 gb</p>
                                                    </div>
                                                    <div className='fit-content'>
                                                        <p className='m-0 px-md-2 ps-1 '>1TB</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-lg-3 col-2 p-0 text-end d-flex flex-column justify-content-center'>
                                                <p className='fw-bold f-8 mb-0'>1000/Rs</p>
                                                <p className='m-0 text-secondary fs-7'>Qty:1</p>
                                            </div>

                                            <hr className='text-secondary my-3'></hr>
                                            <div className='row'>
                                                <div className='col-6'>
                                                    <p className='fw-bold f-8'>Payment</p>
                                                    <p className='f-9'>MacBook Pro</p>
                                                </div>
                                                <div className='col-6'>
                                                    <p className='fw-bold f-8'>Delivery</p>
                                                    <p className='m-0 pe-2  text-secondary fs-7'>Address</p>
                                                    <p className='m-0 f-9'>abcd, flat no.4</p>
                                                    <p className='m-0 f-9'>jaipur</p>
                                                    <p className='m-0 f-9'>3654 3654 3654</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>



                </div>
                <div class="tab-pane fade" id='password' role="tabpanel" aria-labelledby="profile-tab">
                    {/* -----------------------change password------------------------ */}
                    <div class="container mx-auto col-lg-6 mb-5" >
                        <div class="container2 mt-5 p-3 text-start ">
                            <h1>Update your password</h1>
                        </div>

                        <form>
                            <div class="mb-3 mt-4">
                                <label for="InputEmail1" class="form-label">Current password</label>
                                <input type="password" class="form-control" id="name" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3 mt-4">
                                <label for="InputEmail1" class="form-label">New password</label>
                                <input type="password" class="form-control" id="name" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3 mt-4">
                                <label for="InputEmail1" class="form-label">Confirm password</label>
                                <input type="password" class="form-control" id="name" aria-describedby="emailHelp" />
                            </div>
                            <div class="d-grid gap-2 col-lg-6 mx-auto">
                                <button type="submit" class="btn btn-dark rounded-pill">Update account</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="tab-pane fade" id="billing" role="tabpanel" aria-labelledby="contact-tab">

                    {/* --------------------------change bill------------------------- */}

                    <div class="container mx-auto col-lg-6 mb-5" >
                        <div class="container2 mt-5 p-3 text-start ">
                            <h1>Payments & payouts</h1>
                        </div>
                        <div class="mb-3 mt-4">
                            <p>Payouts refer to the expected returns or disbursements from investments or annuities. A payout may be expressed as a lump sum or on a periodic basis and as either a percentage of the investment's cost or in a real dollar amount.<br></br>

                                A payout can also refer to the period in which an investment or project is expected to recoup its initial capital investment and become minimally profitable. In this case, it is short for "time to payout," "term to payout," or "payout period."<br></br>

                                In terms of financial securities, such as annuities and dividends, payouts refer to the amounts received at given points in time. For example, in the case of an annuity, payouts are made to the annuitant at regular intervals, such as monthly or quarterly.</p>
                        </div>
                    </div></div>
            </div>


        </>
    )
}

export default MyAccount
