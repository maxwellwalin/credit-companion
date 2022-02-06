import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Header from '../src/Header';

export default function Quiz() {
  return (
    <>
    <Header />
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom align='center'>
          Credit Quiz
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
    </>
  );
}
