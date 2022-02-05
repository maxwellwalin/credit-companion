import { Box, Button, Container, Typography } from "@mui/material";
import Link from "./Link";

export default function Header() {
    return (
        <Container component="header" maxWidth={false} sx={{boxShadow: "0.4px 0.8px 0.8px hsl(0deg 0% 0% / 0.49)"}}>
            <Box py={3} display="flex" justifyContent="space-between">
                <Typography component="h1" variant="h4">
                    Credit Companion
                </Typography>
                <Button variant="contained" component={Link} noLinkStyle href="/">
                    Go to the main page
                </Button>
            </Box>
        </Container>
    );
}
