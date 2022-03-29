import { Box, Button, Container, Typography } from "@mui/material";
import Link from "./Link";

export default function Header() {
    return (
        <Container component="header" maxWidth='lg'>
            <Box
                py={ 3 }
                mb={ 5 }
                display="flex"
                justifyContent="space-between">
                <Typography component={ Link } href="/" sx={ { textDecoration: 'none' } }>
                    <Typography variant='h4' component='h1' sx={ { fontWeight: 'bold' } }>
                        Credit Companion
                    </Typography>
                </Typography>
                <Box
                    component="nav"
                    display={ 'grid' }
                    gridTemplateColumns={ 'auto auto auto' }
                    justifyItems={ 'center' }
                    gap={ 2 }>
                    <Button variant="contained" component={ Link } noLinkStyle href="/quiz">
                        Take the credit quiz
                    </Button>
                    <Button variant="outlined" component={ Link } noLinkStyle href="/">
                        Home
                    </Button>
                    <Button variant="outlined" component={ Link } noLinkStyle href="/login">
                        Login
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}
