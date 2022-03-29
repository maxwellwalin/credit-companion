import styled from "styled-components";
import { Box, Button, Checkbox } from "@mui/material";
import useForm from "../lib/useForm";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import auth from "../lib/auth";

export const NonLink = styled.a`
  color: #50b5ff;
  text-decoration: none;
  cursor: pointer;
`;

const SIGNIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        name
      }
    }
  }
`;

export default function SignIn({ setSignin }) {
  const { inputs, handleChange, resetForm } = useForm({
    email: "",
    password: "",
  });
  const [signin, { data, loading, error }] = useMutation(SIGNIN_MUTATION, {
    variables: inputs,
  });
  async function handleSubmit(e) {
    e.preventDefault(); // stop the form from submitting
    try {
      const user = await signin()
      auth.login(user?.data?.login?.token);
      resetForm();
    } catch (err) {
      console.log(err)
    }
  }
  const handleSignIn = () => {
    setSignin(false);
  };

  return (
    <div class="col-md-6 bg-white pt-5 pb-lg-0 pb-5">
      <div class="sign-in-from">
        <h1 class="mb-0">Sign In</h1>
        <p>Enter your email address and password to access admin panel.</p>
        <form class="mt-4" method="POST" onSubmit={ handleSubmit }>
          <div class="form-group">
            <label class="form-label" for="exampleInputEmail1">
              Email address
            </label>
            <input
              type="email"
              name="email"
              class="form-control mb-0"
              id="exampleInputEmail1"
              placeholder="Enter email"
              value={ inputs.email }
              onChange={ handleChange }
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
              name="password"
              class="form-control mb-0"
              id="exampleInputPassword1"
              placeholder="Password"
              value={ inputs.password }
              onChange={ handleChange }
            />
          </div>
          <Box display={ "flex" } justifyContent="space-between">
            <Box display={ "flex" } alignItems="center">
              <Checkbox />
              <label class="form-check-label" for="customCheck11">
                Remember Me
              </label>
            </Box>
            <Button type="submit">Sign In</Button>
          </Box>
          <Box class="sign-info">
            <span class="d-inline-block">
              Don't Have An Account?
              <Button onClick={ handleSignIn }>Sign up</Button>
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
