import styled from "styled-components";
import { Box, Button, Checkbox } from "@mui/material";

export const NonLink = styled.a`
  color: #50b5ff;
  text-decoration: none;
  cursor: pointer;
`;

export default function SignIn({ setSignin }) {

  const handleSignup = () => {
    setSignin(false);
  };

  return (
    <div class="col-md-6 bg-white pt-5 pb-lg-0 pb-5">
      <div class="sign-in-from">
        <h1 class="mb-0">Sign In</h1>
        <p>Enter your email address and password to access admin panel.</p>
        <form class="mt-4">
          <div class="form-group">
            <label class="form-label" for="exampleInputEmail1">
              Email address
            </label>
            <input
              type="email"
              class="form-control mb-0"
              id="exampleInputEmail1"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label class="form-label" for="exampleInputPassword1">
              Password
            </label>
            <a href="#" class="float-end">
              Forgot password?
            </a>
            <input
              type="password"
              class="form-control mb-0"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <Box display={ 'flex' } justifyContent='space-between'>
            <Box display={ 'flex' } alignItems='center'>
              <Checkbox />
              <label class="form-check-label" for="customCheck11">
                Remember Me
              </label>
            </Box>
            <Button type="submit">
              Sign In
            </Button>
          </Box>
          <Box class="sign-info">
            <span class="d-inline-block">
              Don't Have An Account?<Button onClick={ handleSignup }>Sign up</Button>
            </span>
            <ul class="iq-social-media">
              <li>
                <a href="#">
                  <i class="ri-facebook-box-line"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ri-twitter-line"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="ri-instagram-line"></i>
                </a>
              </li>
            </ul>
          </Box>
        </form>
      </div>
    </div>
  );
}
