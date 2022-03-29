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
    <Box sx={ {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    } }>
      <Header />
      <Container component="main" maxWidth="lg">
        <Box display='flex' flexWrap={ 'wrap' } justifyContent={ 'space-between' } alignItems='center' mb={ 5 }>
          <Box maxWidth={ 400 }>
            <Typography variant="h4" component="h2" mb={ 5 } fontWeight={ "bold" }>
              Fixing your own credit should be free and easy. Now it is!
            </Typography>
            <Typography component="h4" mb={ 5 } fontWeight={ 400 }>
              Duis duis sit ullamco magna sunt quis elit commodo cillum labore ad elit. Duis duis sit ullamco magna sunt quis elit commodo cillum labore ad elit.
            </Typography>
            <Button variant="contained" component={ Link } noLinkStyle href="/quiz" sx={ { maxWidth: 'fit-content' } }>
              Take the credit quiz
            </Button>
          </Box>
          <Box maxWidth={ 700 }>
            <img src='/hero-illustation-1-man-fixing-credit-on-computer.svg' style={ { width: '100%' } }></img>
          </Box>
        </Box>
        <Box display='flex' flexWrap={ 'wrap' } justifyContent={ 'space-between' } alignItems='center' mb={ 8 } p={ 8 } borderRadius={ 3 } boxShadow={ '0 0 10px 10px rgb(225 228 229 / 25%);' }>
          <Box maxWidth={ 500 }>
            <Typography variant="h4" component="h2" mb={ 2 } fontWeight={ 500 }>
              Is your credit shit? Average? Above average? Doesn't matter, we can help you improve it.
            </Typography>
            <Typography component="h4" mb={ 3 } fontWeight={ 400 }>
              Duis duis sit ullamco magna sunt quis elit commodo cillum labore ad elit. Duis duis sit ullamco magna sunt quis elit commodo cillum labore ad elit.
            </Typography>
            <Button variant="outlined" component={ Link } noLinkStyle href="/quiz" sx={ { maxWidth: 'fit-content' } }>
              Let's go
            </Button>
          </Box>
          <Box maxWidth={ 500 } height={ 'fit-content' } borderRadius={ 1 } p={ 3 } boxShadow={ '0 0 0 2px rgb(225 228 229);' }>
            <img src='/video-player-placeholder.jpg' style={ { width: '100%' } }></img>
          </Box>
        </Box>
        <Box display='flex' flexDirection={ 'column' } alignItems={ 'center' } my={ 10 }>
          <Typography variant="h4" component="h2" mb={ 2 } fontWeight={ 500 } maxWidth='sm' textAlign='center'>
            Fixing your credit has never been this easy
          </Typography>
          <Box display='grid' gridTemplateColumns={ '1fr 1fr' } alignItems={ 'center' } my={ 10 } maxWidth={ 'md' } columnGap={ 10 } rowGap={ 10 }>
            <Box textAlign={ 'end' }>
              <div>1.</div>
              <div>Take the credit quiz</div>
              <div>Once you take the credit quiz, we will know exactly how to help you on your credit repair journey.</div>
            </Box>
            <Box>
              <img src='/step1-illustration.svg' style={ { height: '20vh', width: 'inherit' } }></img>
            </Box>
            <Box>
              <img src='/step1-illustration.svg' style={ { height: '20vh', width: 'inherit', float: 'right' } }></img>
            </Box>
            <Box>
              <div>2.</div>
              <div>Create an account</div>
              <div>Once you take the credit quiz, we will know exactly how to help you on your credit repair journey.</div>
            </Box>
            <Box textAlign={ 'end' }>
              <div>3.</div>
              <div>Figure out your credit score</div>
              <div>Once you take the credit quiz, we will know exactly how to help you on your credit repair journey.</div>
            </Box>
            <Box>
              <img src='/step1-illustration.svg' style={ { height: '20vh', width: 'inherit' } }></img>
            </Box>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
