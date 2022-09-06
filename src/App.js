import React from "react";
import "./App.css";

const App = () => {
  return (
    <>
      {/* <!-- Header --> */}
      <header className="sticky-top">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid ">
            <a className="navbar-brand" href="#">
              <img src="./Image/Logo, Icon/Group 33072.png" alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse menu" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#products">
                    Product
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about-us">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact-us">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- Hero section --> */}
      <section className="container container-fluid mt-5">
        <div className="row d-flex align-items-center">
          <div className="col-lg-6 col-md-12">
            <h1
              style={{
                fontWeight: "bold",
                fontSize: "60px",
                color: "rgb(247, 203, 9)",
              }}
            >
              BE THE PENGUINS
            </h1>
            <h1 style={{ fontWeight: "bold", fontSize: "60px" }}>OF WINTER</h1>
            <p style={{ lineHeight: "20px", margin: "25px 0px" }}>
              Lorem Ipsum is simply dummy text of the printing <br />
              typesetting industry.
            </p>
            <button
              type="button"
              className="btn btn-all btn-lg"
              style={{ padding: "15px 20px", fontSize: "15px" }}
            >
              <i
                style={{ fontSize: "15px", marginRight: "10px" }}
                className="fas fa-shopping-cart"
              ></i>
              BUY NOW
            </button>
          </div>

          <div className="col-lg-6 col-md-12 ">
            <img src="./Image/Group 33091.png" alt="person" />
          </div>
        </div>
      </section>

      {/* <!-- Women section --> */}
      <section className=" container container-fluid mt-5" id="products">
        <h1 className="mb-4">WOMAN JACKET</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 jack">
          <div
            className="col-lg-4 col-md-6 col-sm-12 "
            style={{ boxShadow: "20px 20px 40px rgb(230, 230, 230)" }}
          >
            <div className="card h-100" style={{ padding: "15px 15px" }}>
              <img
                style={{
                  backgroundColor: "rgb(206, 206, 206)",
                  height: "225px",
                  padding: "25px 75px",
                  borderRadius: "10px",
                }}
                src="./Image/SeekPng 1.png"
                className="card-img-top"
                alt="jacket"
              />

              <div className="card-body">
                <h3 className="card-title">
                  <strong> Yellow Coat Jacket </strong>
                </h3>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                <div className="d-flex justify-content-between">
                  <h1 style={{ color: "rgb(247, 203, 9)" }}>
                    <strong>$234</strong>
                  </h1>
                  <button
                    type="button"
                    className="btn btn-all btn-lg"
                    style={{ padding: "15px 20px", fontSize: "15px" }}
                  >
                    <i
                      style={{ fontSize: "15px", marginRight: "10px" }}
                      className="fas fa-shopping-cart"
                    ></i>
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12  "
            style={{ boxShadow: "20px 20px 40px rgb(230, 230, 230)" }}
          >
            <div className="card h-100" style={{ padding: "15px 15px" }}>
              <img
                style={{
                  backgroundColor: "rgb(206, 206, 206)",
                  height: "225px",
                  padding: "25px 75px",
                  borderRadius: "10px",
                }}
                src="./Image/PngItem_2597366 1.png"
                className="card-img-top"
                alt="jacket"
              />

              <div className="card-body">
                <h3 className="card-title">
                  <strong> Ladies Jacket </strong>
                </h3>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                <div className="d-flex justify-content-between">
                  <h1 style={{ color: "rgb(247, 203, 9)" }}>
                    <strong>$234</strong>
                  </h1>
                  <button
                    type="button"
                    className="btn btn-all btn-lg"
                    style={{ padding: "15px 20px", fontSize: "15px" }}
                  >
                    <i
                      style={{ fontSize: "15px", marginRight: "10px" }}
                      className="fas fa-shopping-cart"
                    ></i>
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12"
            style={{ boxShadow: "20px 20px 40px rgb(230, 230, 230)" }}
          >
            <div className="card h-100" style={{ padding: "15px 15px" }}>
              <img
                style={{
                  backgroundColor: "rgb(206, 206, 206)",
                  height: "225px",
                  padding: "25px 75px",
                  borderRadius: "10px",
                }}
                src="./Image/image 15.png"
                className="card-img-top"
                alt="jacket"
              />

              <div className="card-body">
                <h3 className="card-title">
                  <strong> Woman Leather Jacket </strong>
                </h3>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                <div className="d-flex justify-content-between">
                  <h1 style={{ color: "rgb(247, 203, 9)" }}>
                    <strong>$234</strong>
                  </h1>
                  <button
                    type="button"
                    className="btn btn-all btn-lg"
                    style={{ padding: "15px 20px", fontSize: "15px" }}
                  >
                    <i
                      style={{ fontSize: "15px", marginRight: "10px" }}
                      className="fas fa-shopping-cart"
                    ></i>
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Men section --> */}
      <section className="container mt-5 jack">
        <h1 className="mb-4">MAN JACKET</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div
            className="col-lg-4 col-md-6 col-sm-12"
            style={{ boxShadow: "20px 20px 40px rgb(230, 230, 230)" }}
          >
            <div className="card h-100" style={{ padding: "15px 15px" }}>
              <img
                style={{
                  backgroundColor: "rgb(206, 206, 206)",
                  height: "225px",
                  padding: "25px 75px",
                  borderRadius: "10px",
                }}
                src="./Image/image 11.png"
                className="card-img-top"
                alt="jacket"
              />

              <div className="card-body">
                <h3 className="card-title">
                  <strong> Snowboard Jacket </strong>
                </h3>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                <div className="d-flex justify-content-between">
                  <h1 style={{ color: "rgb(247, 203, 9)" }}>
                    <strong>$234</strong>
                  </h1>
                  <button
                    type="button"
                    className="btn btn-all btn-lg"
                    style={{ padding: "15px 20px", fontSize: "15px" }}
                  >
                    <i
                      style={{ fontSize: "15px", marginRight: "10px" }}
                      className="fas fa-shopping-cart"
                    ></i>
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12"
            style={{ boxShadow: "20px 20px 40px rgb(230, 230, 230)" }}
          >
            <div className="card h-100" style={{ padding: "15px 15px" }}>
              <img
                style={{
                  backgroundColor: "rgb(206, 206, 206)",
                  height: "225px",
                  padding: "25px 75px",
                  borderRadius: "10px",
                }}
                src="./Image/vippng 1.png"
                className="card-img-top"
                alt="jacket"
              />

              <div className="card-body">
                <h3 className="card-title">
                  <strong> Man Leather Jackets </strong>
                </h3>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                <div className="d-flex justify-content-between">
                  <h1 style={{ color: "rgb(247, 203, 9)" }}>
                    <strong>$234</strong>
                  </h1>
                  <button
                    type="button"
                    className="btn btn-all btn-lg"
                    style={{ padding: "15px 20px", fontSize: "15px" }}
                  >
                    <i
                      style={{ fontSize: "15px", marginRight: "10px" }}
                      className="fas fa-shopping-cart"
                    ></i>
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12 "
            style={{ boxShadow: "20px 20px 40px rgb(230, 230, 230)" }}
          >
            <div className="card h-100" style={{ padding: "15px 15px" }}>
              <img
                style={{
                  backgroundColor: "rgb(206, 206, 206)",
                  height: "225px",
                  padding: "25px 75px",
                  borderRadius: "10px",
                }}
                src="./Image/toppng 1.png"
                className="card-img-top"
                alt="jacket"
              />

              <div className="card-body">
                <h3 className="card-title">
                  <strong>Man Casual Jackets </strong>
                </h3>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                <div className="d-flex justify-content-between">
                  <h1 style={{ color: "rgb(247, 203, 9)" }}>
                    <strong>$234</strong>
                  </h1>
                  <button
                    type="button"
                    className="btn btn-all btn-lg"
                    style={{ padding: "15px 20px", fontSize: "15px" }}
                  >
                    <i
                      style={{ fontSize: "15px", marginRight: "10px" }}
                      className="fas fa-shopping-cart"
                    ></i>{" "}
                    BUY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Features section --> */}
      <section className="container fourth">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="container overflow-hidden shadow p-0 mb-3 bg-white rounded">
              <div className="row gx-5">
                <div className="col">
                  <div className="d-flex p-3 border bg-light">
                    <img
                      style={{
                        width: "95px",
                        height: "95px",
                        paddingRight: "20px",
                      }}
                      src="./Image/Logo, Icon/image 12.png"
                      alt="icon"
                    />

                    <div>
                      <h3 style={{ color: "rgb(1, 1, 80)" }}>
                        <strong>Find the Perfect Fit</strong>
                      </h3>
                      <p>
                        Everybody is different, which is why we offer styles for
                        every body.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container overflow-hidden shadow p-0 mb-3 bg-white rounded">
              <div className="row gx-5">
                <div className="col">
                  <div className="d-flex p-3 border bg-light">
                    <img
                      style={{ width: "95px", height: "95px" }}
                      src="./Image/Logo, Icon/image 13.png"
                      alt="icon"
                    />

                    <div>
                      <h3 style={{ color: "rgb(1, 1, 80)" }}>
                        <strong>Free Exchanges</strong>
                      </h3>
                      <p>
                        One of the many reasons you can shop with peace of mind.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container overflow-hidden shadow p-0 mb-3 bg-white rounded">
              <div className="row gx-5">
                <div className="col">
                  <div className="d-flex p-3 border bg-light">
                    <img
                      style={{ width: "95px", height: "95px" }}
                      src="./Image/Logo, Icon/image 14.png"
                      alt="icon"
                    />

                    <div>
                      <h3 style={{ color: "rgb(1, 1, 80)" }}>
                        <strong>Contact Our Seller</strong>
                      </h3>
                      <p>
                        They are here to help you. That's quite literally what
                        we pay them for.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 ">
            <img
              style={{ marginTop: "20px" }}
              src="./Image/Logo, Icon/XMLID 1.png"
              alt="shop"
            />
          </div>
        </div>
      </section>

      {/* <!-- FAQ section --> */}
      <section className="container mt-5" id="about-us">
        <h1 className="mb-4">Frequestly Asked Questions</h1>

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <img src="./Image/Logo, Icon/freepik.png" alt="shop" />
          </div>

          <div className="col-lg-6 col-md-12 ">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What's your refund policy?
                  </button>
                </h2>

                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus qui temporibus deserunt, illo inventore sed, labore
                    culpa odio eaque cumque architecto reprehenderit harum
                    soluta reiciendis deleniti iure assumenda fugit impedit.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    What's your payment system?
                  </button>
                </h2>

                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam, excepturi, consectetur dolorum delectus qui omnis
                    iste cumque, dolore maiores rerum velit aliquam praesentium
                    alias? Accusamus nisi dignissimos animi sequi! Repellat.
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    When are you open?
                  </button>
                </h2>

                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Mollitia vel, ducimus aliquid ex dicta praesentium quod sed
                    ab hic. Ipsum, aliquid. Veritatis assumenda dolor rem
                    perspiciatis voluptatem distinctio exercitationem aliquid?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Contact section --> */}
      <section className="container container-fluid mt-5 mb-5">
        <h1 className="mb-3">CONTACT US</h1>

        <div className="row d-flex align-items-center">
          <div
            className="col-lg-4 col-md-6 col-sm-12 "
            style={{
              boxShadow: "10px 10px 20px rgb(223, 223, 223)",
              padding: "20px 20px",
            }}
          >
            <h1 style={{ textAlign: "center", color: "rgb(247, 203, 9)" }}>
              <i className="far fa-envelope"></i>
            </h1>
            <h3 style={{ textAlign: "center" }}>Email Address</h3>
            <p style={{ textAlign: "center" }}>
              example@gmail.com <br />
              example2@gmail.com
            </p>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12 "
            style={{
              boxShadow: "10px 10px 20px rgb(223, 223, 223)",
              padding: "20px 20px",
            }}
          >
            <h1 style={{ textAlign: "center", color: "rgb(247, 203, 9)" }}>
              <i className="fas fa-map-marker-alt"></i>
            </h1>
            <h3 style={{ textAlign: "center" }}>Location</h3>
            <p style={{ textAlign: "center" }}>
              Mogbazar
              <br />
              Dhaka, Bangladesh
            </p>
          </div>

          <div
            className="col-lg-4 col-md-6 col-sm-12 "
            style={{
              boxShadow: "10px 10px 20px rgb(223, 223, 223)",
              padding: "20px 20px",
            }}
          >
            <h1 style={{ textAlign: "center", color: "rgb(247, 203, 9)" }}>
              <i className="fas fa-mobile-alt"></i>
            </h1>
            <h3 style={{ textAlign: "center" }}>Mobile Number</h3>
            <p style={{ textAlign: "center" }}>
              014767623988 <br />
              015727634712
            </p>
          </div>
        </div>
      </section>

      {/* <!-- Newsletter section --> */}
      <section className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <h1>Subscribe To Our Newsletter</h1>
          </div>

          <div className="col-md-6">
            <form className="row row-cols-lg-auto g-3 align-items-center">
              <div>
                <label
                  className="visually-hidden"
                  htmlFor="inlineFormInputGroupUsername"
                >
                  Username
                </label>

                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="inlineFormInputGroupUsername"
                    placeholder="Your Email Address"
                    style={{ padding: "14px 50px" }}
                  />
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="btn btn-all btn-lg"
                  style={{ padding: "15px 20px", fontSize: "15px" }}
                >
                  <i
                    style={{ fontSize: "15px", marginRight: "10px" }}
                    className="fas fa-bell"
                  ></i>
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="mt-5 my-footer" id="contact-us">
        <div>
          <h5 className="footer-text">All Rights Reserved.</h5>
          <h3 className="footer-text">Copyright © 2021 Penguin Fashion</h3>
          <h5 style={{ textAlign: "center" }}>
            <img src="./Image/Logo, Icon/Group 33072.png" alt="logo" />
          </h5>
        </div>
      </footer>
    </>
  );
};

export default App;
