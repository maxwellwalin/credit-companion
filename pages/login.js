import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import Login from "../components/Login";
import Footer from "../src/Footer";
import Header from "../src/Header";

export default function login() {
  const [signin, setSignin] = useState(false);
  return (
    <>
      <Header />
      <Login setSignin={setSignin} signin={signin}/>
      <Footer />
    </>
  );
}
