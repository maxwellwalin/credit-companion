import { Box, Container, Typography } from "@mui/material";
import Footer from "../src/Footer";
import Header from "../src/Header";
import styled from "styled-components";

const SignInPage = styled.section`
  background-color: #f5f5f5;
  div.sign-in-detail {
    color: #fff;
    padding: 6.25rem;
    height: 100vh;
  }
  section.sign-in-page {
    height: 100vh;
    background: #50b5ff;
    background: #50b5ff;
    background: linear-gradient(135deg, #50b5ff 0, #0076e5 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='rgba($primary, 80)', endColorstr='#0076e5', GradientType=1);
    position: relative;
    overflow: hidden;
    height: 100vh;
    width: 100%;
    margin: 0 auto;
    padding: 0 auto;
    div.container {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    #container-inside {
      position: relative;
      min-width: 60rem;
      max-width: 80rem;
      height: auto;
      min-height: 100%;
      margin: 0 auto;
      padding: 0 auto;
      overflow: visible;
    }
    /* small cirlce */
    #circle-small {
      -webkit-animation: circle-small-scale 3s ease-in-out infinite alternate;
      animation: circle-small-scale 3s ease-in-out infinite alternate;
      -webkit-animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
      animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
      -webkit-animation-delay: 0s;
      animation-delay: 0s;
      position: absolute;
      top: 12.5rem;
      left: -9.375rem;
      background: #fff;
      width: 18.75rem;
      height: 18.75rem;
      border-radius: 50rem;
      opacity: 0.4;
    }
    @-webkit-keyframes circle-small-scale {
      0% {
        -webkit-transform: scale(1);
      }
      100% {
        -webkit-transform: scale(1.1);
      }
    }
    @keyframes circle-small-scale {
      0% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
      100% {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }
    }
    [dir="rtl"] #container-inside #circle-small {
      right: -9.375rem;
      left: unset;
    }
    /* end small cirlce */
    /* medium cirlce */
    #circle-medium {
      -webkit-animation: circle-small-scale 3s ease-in-out infinite alternate;
      animation: circle-small-scale 3s ease-in-out infinite alternate;
      -webkit-animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
      animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
      -webkit-animation-delay: 0.3s;
      animation-delay: 0.3s;
      position: absolute;
      top: 3.125rem;
      left: -18.75rem;
      background: #fff;
      width: 37.5rem;
      height: 37.5rem;
      border-radius: 50rem;
      opacity: 0.3;
    }
    [dir="rtl"] #container-inside #circle-medium {
      right: -18.75rem;
      left: unset;
    }
    /* end medium cirlce */
    /* large circle */
    #circle-large {
      -webkit-animation: circle-small-scale 3s ease-in-out infinite alternate;
      animation: circle-small-scale 3s ease-in-out infinite alternate;
      -webkit-animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
      animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
      -webkit-animation-delay: 0.6s;
      animation-delay: 0.6s;
      position: absolute;
      top: -6.25rem;
      left: -28.125rem;
      background: #fff;
      width: 56.25rem;
      height: 56.25rem;
      border-radius: 50rem;
      opacity: 0.2;
    }
    [dir="rtl"] #container-inside #circle-large {
      right: -28.125rem;
      left: unset;
    }
    /* end large circle */
    /* x-large circle */
    #circle-xlarge {
      -webkit-animation: circle-small-scale 3s ease-in-out infinite alternate;
      animation: circle-small-scale 3s ease-in-out infinite alternate;
      -webkit-animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
      animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
      -webkit-animation-delay: 0.9s;
      animation-delay: 0.9s;
      position: absolute;
      top: -15.625rem;
      left: -37.5rem;
      background: #fff;
      width: 75rem;
      height: 75rem;
      border-radius: 50rem;
      opacity: 0.1;
    }
    [dir="rtl"] #container-inside #circle-xlarge {
      right: -37.5rem;
      left: unset;
    }
    /* end x-large circle */
    /* xx-large circle */
    #circle-xxlarge {
      -webkit-animation: circle-small-scale 3s ease-in-out infinite alternate;
      animation: circle-small-scale 3s ease-in-out infinite alternate;
      -webkit-animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
      animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
      -webkit-animation-delay: 1.2s;
      animation-delay: 1.2s;
      position: absolute;
      top: -25rem;
      left: -46.875rem;
      background: #fff;
      width: 93.75rem;
      height: 93.75rem;
      border-radius: 50rem;
      opacity: 0.05;
    }
    [dir="rtl"] #container-inside #circle-xxlarge {
      right: -46.875rem;
      left: unset;
    }
    /* end xx-large circle */
  }
`;

export default function Login() {
  return (
    <>
      <Header />
      <SignInPage className="wrapper">
        <section className="sign-in-page">
          <div id="container-inside">
            <div id="circle-small"></div>
            <div id="circle-medium"></div>
            <div id="circle-large"></div>
            <div id="circle-xlarge"></div>
            <div id="circle-xxlarge"></div>
          </div>
          <div className="container p-0">
            <div className="row no-gutters">
              <div className="col-md-6 text-center pt-5">
                <div className="sign-in-detail text-white">
                  <a className="sign-in-logo mb-5" href="#">
                    <img
                      src="../assets/images/logo-full.png"
                      className="img-fluid"
                      alt="logo"
                    />
                  </a>
                  <div className="sign-slider overflow-hidden ">
                    <ul className="swiper-wrapper list-inline m-0 p-0 ">
                      <li className="swiper-slide">
                        <img
                          src="../assets/images/login/1.png"
                          className="img-fluid mb-4"
                          alt="logo"
                        />
                        <h4 className="mb-1 text-white">Find new friends</h4>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content.
                        </p>
                      </li>
                      <li className="swiper-slide">
                        <img
                          src="../assets/images/login/2.png"
                          className="img-fluid mb-4"
                          alt="logo"
                        />
                        <h4 className="mb-1 text-white">
                          Connect with the world
                        </h4>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content.
                        </p>
                      </li>
                      <li className="swiper-slide">
                        <img
                          src="../assets/images/login/3.png"
                          className="img-fluid mb-4"
                          alt="logo"
                        />
                        <h4 className="mb-1 text-white">Create new events</h4>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 bg-white pt-5 pt-5 pb-lg-0 pb-5">
                <div className="sign-in-from">
                  <h1 className="mb-0">Sign Up</h1>
                  <p>
                    Enter your email address and password to access admin panel.
                  </p>
                  <form className="mt-4">
                    <div className="form-group">
                      <label
                        className="form-label"
                        htmlFor="exampleInputEmail1"
                      >
                        Your Full Name
                      </label>
                      <input
                        type="email"
                        className="form-control mb-0"
                        id="exampleInputEmail1"
                        placeholder="Your Full Name"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        className="form-label"
                        htmlFor="exampleInputEmail2"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control mb-0"
                        id="exampleInputEmail2"
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        className="form-label"
                        htmlFor="exampleInputPassword1"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control mb-0"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <div className="d-inline-block w-100">
                      <div className="form-check d-inline-block mt-2 pt-1">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customCheck1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customCheck1"
                        >
                          I accept <a href="#">Terms and Conditions</a>
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary float-end"
                      >
                        Sign Up
                      </button>
                    </div>
                    <div className="sign-info">
                      <span className="dark-color d-inline-block line-height-2">
                        Already Have Account ? <a href="sign-in.html">Log In</a>
                      </span>
                      <ul className="iq-social-media">
                        <li>
                          <a href="#">
                            <i className="ri-facebook-box-line"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="ri-twitter-line"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="ri-instagram-line"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <script src="../assets/js/slider.js"></script>
      </SignInPage>
      <Footer />
    </>
  );
}
