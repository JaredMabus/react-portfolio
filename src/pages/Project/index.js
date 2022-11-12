import { useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Project = () => {
    return (
        <Container maxWidth={false} sx={{ width: '100%', minWidth: '100%', minHeight: '100vh' }} disableGutters={true} >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    minHeight: '100vh',
                    width: '100%'
                }}
                maxWidth="xl"
            >
                <Nav />
                <Typography variant="h3">Projects</Typography>

            </Container>
            <Footer />
        </Container>
    )
};

export default Project;