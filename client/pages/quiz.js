import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Header from '../src/Header';
import Footer from '../src/Footer';

export default function Quiz() {
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
            Credit Quiz
          </Typography>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
