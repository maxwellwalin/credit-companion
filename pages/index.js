import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Header from '../src/Header';
import { Button } from '@mui/material';
import Footer from '../src/Footer';

export default function Index() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <Header />
      <Container component="main" maxWidth="md">
        <Box my={4} display='flex' flexDirection='column' alignItems='center'>
          <Typography variant="h4" component="h2" gutterBottom align='center'>
            Fixing your own credit should be free and easy.
          </Typography>
          <Typography variant="h4" component="h2" gutterBottom align='center'>
            Now it is.
          </Typography>
          <Button variant="contained" component={Link} noLinkStyle href="/quiz" sx={{ maxWidth: 'fit-content' }}>
            Take the credit quiz
          </Button>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
