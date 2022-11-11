import * as React from 'react';
import { NavLink } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from "@mui/material/styles";


const StyledNavLink = styled(NavLink)(
    ({ theme }) => `
        margin: 1rem;
        white-space:nowrap;
    `
);

const navData = [
    {
        id: 0,
        name: "About Me",
        link: "/about-me",
    },
    {
        id: 1,
        name: "Projects",
        link: "/projects",
    },
    {
        id: 2,
        name: "Contact",
        link: "/contact",
    },
    {
        id: 3,
        name: "Resume",
        link: "/resume",
    },

]

const NavItem = ({ item }) => {
    return <StyledNavLink
        to={item.link}
        // onClick={handleNavMenu}
        style={({ isActive }) =>
            isActive
                ? {
                    textDecoration: "none",
                    color: '#78E3B1',
                    borderBottom: "1px solid #78E3B1",
                    transition: '250ms ease-in-out'
                }
                : {
                    textDecoration: "none",
                    color: "#E5E5E5",
                    borderBottom: "1px solid rgba(0,0,0,0)",
                }
        }
    >
        {item.name}
    </StyledNavLink>
};

const Nav = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'end',
            flexGrow: 1,
            m: 0,
            p: 0
        }}>
            <AppBar position="static">
                <Toolbar
                    sx={{
                        display: 'flex',
                        justifyContent: 'end',
                        alignItems: 'center',
                        backgroundColor: '#0D1117',
                    }}
                    disableGutters={true}
                >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{
                            mr: 2,
                            display: { xs: "flex", sm: 'none' }
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Box
                            sx={{
                                display: { xs: 'none', sm: "flex" }
                            }}
                        >
                            {navData.map(item => <NavItem key={item.id} item={item} />)}
                        </Box>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Nav