import { Box, Container, Typography } from "@mui/material";
import Copyright from "../src/Copyright";
import Header from "../src/Header";
import ProTip from "../src/ProTip";

export default function Profile() {
  return (
    <Box sx={ {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    } }>
      <Header />
      <Container component="main">
        <Box my={ 4 }>
          <Typography variant="h4" component="h2" gutterBottom align='center'>
            Profile Page
          </Typography>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
