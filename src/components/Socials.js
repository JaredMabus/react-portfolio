import * as React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Socials = () => {
    return (
        <Box
            sx={{
                position: 'fixed',
                right: 0,
                top: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 2,
                borderRadius: "0px 0px 4px 10px",
                backgroundColor: '#78E3B1',
                'svg': {
                    color: '#0D111785',
                    transition: '250ms ease-in-out',
                    m: .5,
                    ':hover': {
                        color: '#0D1117'
                    }
                }
            }}
        >
            <a href="https://github.com/JaredMabus"><GitHubIcon fontSize='large' /></a>
            <a href="https://www.linkedin.com/in/jaredmabusth/"><LinkedInIcon fontSize='large' /></a>
        </Box>
    )
}

export default Socials