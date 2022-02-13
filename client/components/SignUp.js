import useForm from "../lib/useForm";
import gql from "graphql-tag";
import Error from "./ErrorMessage";
import { NonLink } from "./signIn";
import { useMutation } from "@apollo/client";
import { Box, Button, Checkbox } from "@mui/material";

const SIGNUP_MUTATION = gql`
  mutation addUser(
    $name: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      name: $name
      email: $email
      password: $password
    ) {
      token
      user {
        name
      }
    }
  }
`;

export default function SignUp({ setSignin }) {
  const { inputs, handleChange, resetForm } = useForm({
    name: "",
    email: "",
    password: "",
  });
  const [signup, { data, loading, error }] = useMutation(SIGNUP_MUTATION, {
    variables: inputs,
  });

  async function handleSubmit(e) {
    e.preventDefault(); // stop the form from submitting
    const res = await signup().catch(console.error);
    resetForm();
  }

  const handleSignIn = () => {
    setSignin(true);
  };
  return (
    <div className="col-md-6 bg-white pt-5 pb-lg-0 pb-5">
      <div className="sign-in-from">
        <h1 className="mb-0">Sign Up</h1>
        <p>Enter your email address and password to access admin panel.</p>
        <form className="mt-4" method="POST" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="exampleInputEmail1">
              Your Full Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control mb-0"
              id="exampleInputEmail1"
              placeholder="Your Full Name"
              value={inputs.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="exampleInputEmail2">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control mb-0"
              id="exampleInputEmail2"
              placeholder="Enter email"
              value={inputs.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="exampleInputPassword1">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control mb-0"
              id="exampleInputPassword1"
              placeholder="Password"
              value={inputs.password}
              onChange={handleChange}
            />
          </div>
          <Box display={'flex'} justifyContent='space-between'>
            <Box display={'flex'} alignItems='center'>
              <Checkbox />
              <label className="form-check-label" htmlFor="customCheck1">
                I accept <a href="#">Terms and Conditions</a>
              </label>
            </Box>
            <Button type="submit">
              Sign Up
            </Button>
          </Box>
          <div className="sign-info">
            <span className="d-inline-block">
              Already Have An Account?<Button onClick={handleSignIn}>Log In</Button>
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
