import { Box, Container, Typography } from "@mui/material";
import Copyright from "../src/Copyright";
import Header from "../src/Header";
import ProTip from "../src/ProTip";

export default function Profile() {
  return (
    <>
    <Header />
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom align='center'>
          Profile
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
    </>
  );
}