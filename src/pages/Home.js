import { useState } from "react";
import Nav from "../components/Nav";
import Socials from "../components/Socials";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import avatar from "../assets/images/ProfilePic.svg";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Container maxWidth="xl" >
                <Nav />
                <Socials />
                <Container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                    maxWidth="xl">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            my: '5rem',
                            width: "100%"
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                p: 2,
                            }}
                        >
                            <h1>Hi, I'm Jared</h1>
                            <h3>Here are some of my <Link to="/portfolio">Projects</Link></h3>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                p: { xs: .5, sm: 1, md: 2 },
                                pl: 0,
                                'img': {
                                    minWidth: { xs: '100%' },
                                    maxWidth: { xs: '100%', md: 'auto' },
                                    maxHeight: { xs: '100%', md: '300px' }
                                }
                            }}
                        >
                            <img src={avatar} alt='avatar' />
                        </Box>
                    </Box>
                </Container>
            </Container>
        </>
    )
};

export default Home;