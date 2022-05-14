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
import { useAuth } from "hooks/auth";
import Link from 'next/link';
import { Button } from "@mui/material";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export const navLinksNotConnected = [
    { title: `REGISTER`, path: `/register` },
    { title: `LOG IN`, path: `/login` },
];

export const navLinksConnected = [
    /* { title: `LOG OUT`, path: `/` }, */
    { title: `PROFILE`, path: `/profile` },
];

const Header = () => {
    const { user } = useAuth({ middleware: 'guest' })
    const { logout } = useAuth()

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Container
                        maxWidth="lg"
                        sx={{ display: `flex`, justifyContent: `space-between` }}
                    >
                        <Link href="/">
                            <IconButton edge="start" aria-label="home" sx={{ color: `white` }}>
                                {/* <MuiNextLink activeClassName="active" href="/"> */}
                                <LiveTvIcon
                                    sx={{
                                        color: (theme) => theme.palette.common.white,
                                    }}
                                    fontSize="large"
                                />
                                {/* </MuiNextLink> */}
                                <span>INKT</span>
                            </IconButton>
                        </Link>
                        {user ?
                            <>  <NavBar navLinks={navLinksConnected} />
                                <SideDrawer navLinks={navLinksConnected} />
                                <Button color="inherit" onClick={logout}>Log me out</Button>
                            </>
                            :
                            <>
                                <NavBar navLinks={navLinksNotConnected} />
                                <SideDrawer navLinks={navLinksNotConnected} />
                            </>
                        }
                    </Container>
                </Toolbar>
            </AppBar>
            <Offset />
        </>
    );
};

export default Header;
