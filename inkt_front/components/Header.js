import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/system";
import IconButton from "@mui/material/IconButton"
// import Home from "@mui/icons-material/Home"
import MuiNextLink from "./MuiNextLink";
import NavBar from "./NavBar"
import SideDrawer from "./SideDrawer";
import LiveTvIcon from '@mui/icons-material/LiveTv';

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export const navLinks = [
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
                        <IconButton edge="start" aria-label="home" sx={{ color: `white` }}>
                            <MuiNextLink activeClassName="active" href="/">
                                <LiveTvIcon
                                    sx={{
                                        color: (theme) => theme.palette.common.white,
                                    }}
                                    fontSize="large"
                                />
                            </MuiNextLink>
                        <span>INKT</span>
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
