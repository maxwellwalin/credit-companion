import { Button, Checkbox } from "@mui/material";
import { Box } from "@mui/system";
import { NonLink } from "./signIn";

export default function SignUp({setSignin}) {
  const handleSignIn = () => {
    setSignin(true);
  }
  return (
    <div className="col-md-6 bg-white pt-5 pb-lg-0 pb-5">
      <div className="sign-in-from">
        <h1 className="mb-0">Sign Up</h1>
        <p>Enter your email address and password to access admin panel.</p>
        <form className="mt-4">
          <div className="form-group">
            <label className="form-label" htmlFor="exampleInputEmail1">
              Your Full Name
            </label>
            <input
              type="text"
              className="form-control mb-0"
              id="exampleInputEmail1"
              placeholder="Your Full Name"
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="exampleInputEmail2">
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
            <label className="form-label" htmlFor="exampleInputPassword1">
              Password
            </label>
            <input
              type="password"
              className="form-control mb-0"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <Box display={'flex'} justifyContent='space-between'>
            <Box display={'flex'} alignItems='center'>
              <Checkbox
                id="customCheck1"
                style={{ cursor: "pointer" }}
              />
              <label className="form-check-label" htmlFor="customCheck1">
                I accept <a href="#">Terms and Conditions</a>
              </label>
            </Box>
            <Button>
              Sign Up
            </Button>
          </Box>
          <div className="sign-info">
            <span className="d-inline-block">
              Already Have Account ? <Button onClick={handleSignIn}>Log In</Button>
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
  );
}
