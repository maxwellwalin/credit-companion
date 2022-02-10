import { Box, Container, Typography } from "@mui/material";
import Footer from "../src/Footer";
import Header from "../src/Header";

export default function VerifyEmail() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <Header />
      <Container component="main">
        <Box my={4}>
          <Typography variant="h4" component="h2" gutterBottom align='center'>
            An email has been sent to your inbox. Please click the link to verify your email address.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
