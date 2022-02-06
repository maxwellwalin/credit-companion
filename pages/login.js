import { Box, Container, Typography } from "@mui/material";
import Footer from "../src/Footer";
import Header from "../src/Header";

export default function Login() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <Header />
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom align='center'>
            Login / Sign Up
          </Typography>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
