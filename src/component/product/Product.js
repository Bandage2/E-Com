import React, { useState } from "react";
import "./Product.css";

export default function Product() {
  const [mainImage, setMainImage] = useState("");

  const handleImageClick = (e) => {
    const clickedClassName = e.target.dataset.src;
    setMainImage(clickedClassName);
  };

  return (
    <>
      <div class="main">
        <ul class="bar d-flex gap-4 ms-5 mt-3 fs-6 ">
          <li>Women</li>
          <li>Men</li>
          <li>Kids</li>
          <li>Sports</li>
          <li>Brands</li>
          <li style={{ color: "red" }}>Shoes</li>
        </ul>
        <hr />
        <ul class="bar d-flex gap-4 ms-5 mt-3 " style={{ color: "grey" }}>
          <li>Clothes and Shoes</li>
          <li>
            <i class="bi bi-caret-right-fill me-3"></i>Shoes
          </li>
          <li>
            <i class="bi bi-caret-right-fill me-3"></i>Reebok
          </li>
        </ul>

        <div class="row ">
          <div class="col-lg-6 col-12 p-5 ">
            <img
              src="./images/product-img-removebg-preview.png"
              class="big-img  w-100 rounded"
              style={{ backgroundColor: "#f2f0ea" }}
              id="main-img"
              alt="..."
            />

            <div class="row row-img pt-3 ">
              <div class=" col-lg-3 col-md-4 col-6">
                <img
                  src="./images/shoe-img1-removebg-preview.png"
                  class="imgg rounded"
                  style={{ backgroundColor: "#f2f0ea" }}
                  onClick={handleImageClick}
                  alt="..."
                  data-src="./images/shoe-img1.png"
                />
              </div>
              <div class=" col-lg-3 col-md-4 col-6">
                <img
                  src="./images/shoe-img1-removebg-preview.png"
                  class="imgg rounded"
                  style={{ backgroundColor: "#f2f0ea" }}
                  onClick={handleImageClick}
                  alt="..."
                  data-src="./images/shoe-img1.png"
                />
              </div>
              <div class=" col-lg-3 col-md-4 col-6 pt-2 pt-lg-0">
                <img
                  src="./images/shoe-img2-removebg-preview.png"
                  class="imgg rounded"
                  style={{ backgroundColor: "#f2f0ea" }}
                  onClick={handleImageClick}
                  alt="..."
                  data-src="./images/shoe-img2.jpeg"
                />
              </div>
              <div class=" col-lg-3 col-md-4 col-6 pt-2 pt-lg-0">
                <img
                  src="./images/shoe-img3-removebg-preview.png"
                  class="imgg rounded"
                  style={{ backgroundColor: "#f2f0ea" }}
                  onClick={handleImageClick}
                  alt="..."
                  data-src="./images/shoe-img3.jpg"
                />
              </div>
            </div>
          </div>

          <div class="col-lg-6 col-12 p-5 ">
            Reebok
            <h5 class="card-text" style={{ color: "darkgray" }}>
              Shoes Reebok zig kinetics
            </h5>
            <h2 class="card-text"> 1496/-</h2>
            <div class=" d-flex">
              <i
                class="bi bi-star-fill"
                style={{ color: "rgb(249, 205, 60)" }}
              ></i>
              <i
                class="bi bi-star-fill"
                style={{ color: "rgb(249, 205, 60)" }}
              ></i>
              <i
                class="bi bi-star-fill"
                style={{ color: "rgb(249, 205, 60)" }}
              ></i>
              <i
                class="bi bi-star-fill"
                style={{ color: "rgb(249, 205, 60)" }}
              ></i>
              <i
                class="bi bi-star-fill"
                style={{ color: "rgb(249, 205, 60)" }}
              ></i>
              <p class="ms-3 " style={{ color: "darkgray" }}>
                42 reviews
              </p>
            </div>
            <div>
              Size<i class="bi bi-caret-right-fill"></i>
              <p style={{ color: "darkgray" }}>EU Men</p>
              <ul class=" d-flex bar">
                <li class=" ps-1 mt-2">
                  <button type="button" class="btn btn-light">
                    40
                  </button>
                </li>
                <li class="  ps-1 mt-2">
                  <button type="button" class="btn btn-light">
                    38
                  </button>
                </li>
                <li class=" ps-1 mt-2">
                  <button type="button" class="btn btn-light">
                    36
                  </button>
                </li>
                <li class="  ps-1 mt-2">
                  <button type="button" class="btn btn-light">
                    34
                  </button>
                </li>
                <li class=" ps-1 mt-2">
                  <button type="button" class="btn btn-light ">
                    32
                  </button>
                </li>
                <li class="  ps-1 mt-2">
                  <button type="button" class="btn btn-light">
                    30
                  </button>
                </li>
                <li class="  ps-1 mt-2">
                  <button type="button" class="btn btn-light">
                    28
                  </button>
                </li>
                <li class="  ps-1 mt-2">
                  <button type="button" class="btn btn-light">
                    26
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h6 class="mt-3">
                colours<i class="bi bi-caret-right-fill ms-2"></i>
              </h6>
              <ul class=" d-flex bar gap-2">
                <li class="mt-1">
                <img
                    src="./images/product-img-removebg-preview.png"
                    class="car rounded"
                    style={{ backgroundColor: "#f2f0ea" }}
                    alt="..."
                  />
                </li>
                <li class=" mt-1">
                <img
                    src="./images/shoe-img2-removebg-preview.png"
                    class="car rounded"
                    style={{ backgroundColor: "#f2f0ea" }}
                    alt="..."
                  />
                </li>
                <li class="mt-1">
                <img
                    src="./images/shoe-img3-removebg-preview.png"
                    class="car rounded"
                    style={{ backgroundColor: "#f2f0ea" }}
                    alt="..."
                  />
                </li>

              </ul>

            </div>
            <div class="row">
              <div class="col-6">
                <button type="button" class="bttn btn-light p-2 mt-4">
                  <i class="bi bi-bag mx-1"></i>Add to cart
                </button>
              </div>
              <div class="col-6">
                <button type="button" class="heart btn btn-light mt-4">
                  <i class="bi bi-heart"></i>
                </button>
              </div>
            </div>
            <div class="ms-auto pt-5" style={{ color: "darkgray" }}>
              <i class="bi bi-truck me-2"></i>Free delivery on oreders over
              500rs
            </div>
          </div>
        </div>

        <div class="part2 ps-3 pb-3 ">
          <div class="col-lg-6 pe-4">
            <div class="d-flex gap-5 mt-4 fs-5" style={{ color: "darkgray" }}>
              <p>Details</p>
              <p class="text-dark">Reviews</p>
              <p>Discussion</p>
            </div>
            <div class="new">
              <p class="ms-3 pt-1">
                Newest<i class="bi bi-caret-down-fill ms-2 me-2 "></i>
              </p>
            </div>
          </div>
          <div class="review-sec1">
            <div class="row">
              <div class="col-lg-6 col-12">
                <div class="d-flex">
                  <div class="d-flex">
                    <i class="bi bi-person-circle me-2 fs-1"></i>
                    <p class="pt-3 ms-2">
                      Ritesh Kumar
                      <div class=" d-flex gap-1 pt-2">
                        <i
                          class="bi bi-star-fill"
                          style={{ color: "rgb(249, 205, 60)" }}
                        ></i>
                        <i
                          class="bi bi-star-fill"
                          style={{ color: "rgb(249, 205, 60)" }}
                        ></i>
                        <i
                          class="bi bi-star-fill"
                          style={{ color: "rgb(249, 205, 60)" }}
                        ></i>
                        <i
                          class="bi bi-star-fill"
                          style={{ color: "rgb(249, 205, 60)" }}
                        ></i>
                        <i
                          class="bi bi-star-fill"
                          style={{ color: "rgb(249, 205, 60)" }}
                        ></i>
                      </div>
                      Excellent running shoes , very nice and comfortable .
                      <p style={{ color: "rgb(244, 158, 92)" }}>
                        Reply
                        <i class="fa-regular fa-thumbs-up text-dark ms-4">32</i>
                        <i class="fa-regular fa-thumbs-down text-dark ms-3">
                          2
                        </i>
                      </p>
                    </p>
                  </div>
                  <div class="pt-3 ms-auto" style={{ color: "darkgray" }}>
                    Yesterday
                  </div>
                </div>
                <hr />
                <div class="d-flex">
                  <div class="d-flex">
                    <i class="bi bi-person-circle me-2 fs-1"></i>
                    <p class="pt-3 ms-2">
                      Rani Sharma
                      <div class=" d-flex gap-1 pt-2">
                        <i
                          class="bi bi-star-fill"
                          style={{ color: "rgb(249, 205, 60)" }}
                        ></i>
                        <i
                          class="bi bi-star-fill"
                          style={{ color: "rgb(249, 205, 60)" }}
                        ></i>
                        <i
                          class="bi bi-star-fill"
                          style={{ color: "rgb(249, 205, 60)" }}
                        ></i>
                        <i
                          class="bi bi-star-fill"
                          style={{ color: "rgb(249, 205, 60)" }}
                        ></i>
                        <i
                          class="bi bi-star-fill"
                          style={{ color: "rgb(249, 205, 60)" }}
                        ></i>
                      </div>
                      Good Shoes .
                      <p style={{ color: "rgb(244, 158, 92)" }}>
                        Reply
                        <i class="fa-regular fa-thumbs-up text-dark ms-4">21</i>
                        <i class="fa-regular fa-thumbs-down text-dark ms-3">
                          0
                        </i>
                      </p>
                    </p>
                  </div>
                  <div class="pt-3 ms-auto" style={{ color: "darkgray" }}>
                    Yesterday
                  </div>
                </div>
              </div>
              <div class="review-sec2 col-lg-6 col-12 ">
                <div class="ms-auto">
                  <h4 class="ps-5">Reviews</h4>
                  <div class=" d-flex gap-1 pt-2 ps-5">
                    <i
                      class="bi bi-star-fill"
                      style={{ color: "rgb(249, 205, 60)" }}
                    ></i>
                    <i
                      class="bi bi-star-fill"
                      style={{ color: "rgb(249, 205, 60)" }}
                    ></i>
                    <i
                      class="bi bi-star-fill"
                      style={{ color: "rgb(249, 205, 60)" }}
                    ></i>
                    <i
                      class="bi bi-star-fill"
                      style={{ color: "rgb(249, 205, 60)" }}
                    ></i>
                    <i
                      class="bi bi-star-fill"
                      style={{ color: "rgb(249, 205, 60)" }}
                    ></i>
                    <span class="ms-5">4.8</span>
                  </div>
                  <div class="row pe-3 ps-5">
                    <div class="side">
                      <div>5 star</div>
                    </div>
                    <div class="middle">
                      <div class="bar-container rounded">
                        <div class="bar-5 rounded"></div>
                      </div>
                    </div>
                    <div class="side right">
                      <div>150</div>
                    </div>
                    <div class="side">
                      <div>4 star</div>
                    </div>
                    <div class="middle">
                      <div class="bar-container rounded">
                        <div class="bar-4 rounded"></div>
                      </div>
                    </div>
                    <div class="side right">
                      <div>63</div>
                    </div>
                    <div class="side">
                      <div>3 star</div>
                    </div>
                    <div class="middle">
                      <div class="bar-container rounded">
                        <div class="bar-3 rounded"></div>
                      </div>
                    </div>
                    <div class="side right">
                      <div>15</div>
                    </div>
                    <div class="side">
                      <div>2 star</div>
                    </div>
                    <div class="middle">
                      <div class="bar-container rounded">
                        <div class="bar-2 rounded"></div>
                      </div>
                    </div>
                    <div class="side right">
                      <div>6</div>
                    </div>
                    <div class="side">
                      <div>1 star</div>
                    </div>
                    <div class="middle">
                      <div class="bar-container rounded">
                        <div class="bar-1 rounded"></div>
                      </div>
                    </div>
                    <div class="side right">
                      <div>20</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
