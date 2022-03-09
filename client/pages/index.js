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
  const size = true;

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <Header />
      <Container component="main" maxWidth="lg">
        <Box display='flex' flexWrap={'wrap'} justifyContent={'space-between'} mb={5}>
          <Box maxWidth={400} mt={5}>
            <Typography variant="h4" component="h2" mb={5} fontWeight={"bold"}>
              Fixing your own credit should be free and easy. Now it is!
            </Typography>
            <Typography component="h4" mb={5} fontWeight={400}>
              Duis duis sit ullamco magna sunt quis elit commodo cillum labore ad elit. Duis duis sit ullamco magna sunt quis elit commodo cillum labore ad elit.
            </Typography>
            <Button variant="contained" component={Link} noLinkStyle href="/quiz" sx={{ maxWidth: 'fit-content' }}>
              Take the credit quiz
            </Button>
          </Box>
          <Box maxWidth={700}>
            <img src='/hero-illustation-1-man-fixing-credit-on-computer.svg' style={{ width: '100%' }}></img>
          </Box>
        </Box>
        <Box display='flex' flexWrap={'wrap'} justifyContent={'space-between'} alignItems='center' mb={5} p={8} borderRadius={3} boxShadow={'0 0 12px 3px rgb(225 228 229);'}>
          <Box maxWidth={500}>
            <Typography variant="h4" component="h2" mb={2} fontWeight={500}>
              Let us show you how we can help you on your path to financial freedom.
            </Typography>
            <Typography component="h4" mb={3} fontWeight={400}>
              Duis duis sit ullamco magna sunt quis elit commodo cillum labore ad elit. Duis duis sit ullamco magna sunt quis elit commodo cillum labore ad elit.
            </Typography>
            <Button variant="outlined" component={Link} noLinkStyle href="/quiz" sx={{ maxWidth: 'fit-content' }}>
              Let's go
            </Button>
          </Box>
          <Box maxWidth={500} height={'fit-content'} borderRadius={1} p={3} boxShadow={'0 0 0 2px rgb(225 228 229);'}>
            <img src='/video-player-placeholder.jpg' style={{ width: '100%' }}></img>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
