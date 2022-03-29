import { Box, Button, Container, Typography } from "@mui/material";
import Link from "./Link";
import { useEffect, useState } from "react";
import auth from "../lib/auth";

export default function Header() {
    const [token, setToken] = useState(null);

    const logout = () => {
        auth.logout();
        setToken(null);
    }

    useEffect(() => {
        const token = localStorage.getItem("id_token");
        setToken(token);
    });
    return (
        <Box
            component="header"
            display={ "flex" }
            justifyContent="center"
            boxShadow="1px 0.3px 3px"
            px={ 2 }
        >
            <Box
                py={ 3 }
                display="flex"
                justifyContent="space-between"
                width={ "1536px" }
            >
                <Typography component={ Link } href="/" sx={ { textDecoration: "none" } }>
                    <Typography variant="h4" component="h1" sx={ { fontWeight: "bold" } }>
                        Credit Companion
                    </Typography>
                </Typography>
                <Box
                    component="nav"
                    display={ "grid" }
                    gridTemplateColumns={ "auto auto auto" }
                    justifyItems={ "center" }
                    gap={ 2 }
                >
                    <Button variant="contained" component={ Link } noLinkStyle href="/quiz">
                        Take the credit quiz
                    </Button>
                    <Button variant="outlined" component={ Link } noLinkStyle href="/">
                        Home
                    </Button>

                    { !token ? (
                        <Button
                            variant="outlined"
                            component={ Link }
                            noLinkStyle
                            href="/login"
                        >
                            Login
                        </Button>
                    ) : (
                        <Button
                            variant="outlined"
                            component={ Link }
                            noLinkStyle
                            onClick={ logout }
                            href="/"
                        >
                            Logout
                        </Button>
                    ) }
                </Box>
            </Box>
        </Box>
    );
}
