import { Box, Button, Container, Typography } from "@mui/material";
import Link from "./Link";

export default function Header() {
    return (
        <Box component="header" display={'flex'} justifyContent='center' boxShadow="1px 0.3px 3px">
            <Box py={3} display="flex" justifyContent="space-between" width={'1536px'}>
                <Typography component="h1" variant="h4">
                    Credit Companion
                </Typography>
                <Box component="nav" display={'grid'} gridTemplateColumns={'auto auto auto'} justifyItems={'center'} gap={2}>
                    <Button variant="contained" component={Link} noLinkStyle href="/quiz">
                        Take the credit quiz
                    </Button>
                    <Button variant="outlined" component={Link} noLinkStyle href="/">
                        Home
                    </Button>
                    <Button variant="outlined" component={Link} noLinkStyle href="/login">
                        Login
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
