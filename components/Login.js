import { useState } from "react";
import SignIn from "./signIn";
import SignUp from "./SignUp";
import { SignInPage } from "./styles/SignInPage";

export default function Login({ signin, setSignin }) {
  return (
    <SignInPage>
      <section className="sign-in-page">
        <div id="container-inside">
          <div id="circle-small"></div>
          <div id="circle-medium"></div>
          <div id="circle-large"></div>
          <div id="circle-xlarge"></div>
          <div id="circle-xxlarge"></div>
        </div>
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-6 text-center pt-5">
              <div className="sign-in-detail text-white">
                <a className="sign-in-logo mb-5" href="#">
                  <img
                    src="https://res.cloudinary.com/dtpgzynwd/image/upload/v1644778478/credit-companion/Credit_Companion_Logo_dkautr.png"
                    className="img-fluid"
                    alt="logo"
                  />
                </a>
                <div className="sign-slider overflow-hidden ">
                  <ul className="list-inline m-0 p-0 ">
                    <li>
                      <img
                        src="https://via.placeholder.com/292x157?text=Random+Image"
                        className="img-fluid mb-4"
                        alt="logo"
                      />
                      <h4 className="mb-1 text-white">Fix your credit</h4>
                      <p>lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {signin ? <SignIn setSignin={setSignin} /> : <SignUp setSignin={setSignin} />}
          </div>
        </div>
      </section>
    </SignInPage>
  );
}
