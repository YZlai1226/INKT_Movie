import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton"
import Home from "@mui/icons-material/Home"
import MuiNextLink from "./MuiNextLink";
import NavBar from "./NavBar"
import SideDrawer from "./SideDrawer";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export const navLinks = [
    { title: `HOME`, path: `/` },
    { title: `REGISTER`, path: `/register` },
    { title: `LOG IN`, path: `/login` },
    { title: `LOG OUT`, path: `/` },
    { title: `PROFILE`, path: `/profile` },
  ];

const Header = () => {
    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Container
                        maxWidth="lg"
                        sx={{ display: `flex`, justifyContent: `space-between` }}
                    >
                        <IconButton edge="start" aria-label="home">
                            <MuiNextLink activeClassName="active" href="/">
                                <Home
                                    sx={{
                                        color: (theme) => theme.palette.common.white,
                                    }}
                                    fontSize="large"
                                />
                            </MuiNextLink>
                        </IconButton>
                        <NavBar navLinks={navLinks} />
                        <SideDrawer navLinks={navLinks} />
                    </Container>
                </Toolbar>
            </AppBar>
            <Offset />
        </>
    );
};

export default Header;
