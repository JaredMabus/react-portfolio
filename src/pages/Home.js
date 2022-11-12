import theme from "../styles/style";
import Nav from "../components/Nav";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import avatar from "../assets/images/ProfilePic.svg";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Home = () => {
    return (
        <Container maxWidth={false} sx={{ width: '100%', minWidth: '100%', minHeight: '100vh' }} disableGutters={true} >
            {/* About Me Container */}
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
                {/* Avatar Container */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        mt: { xs: 3, sm: 15 },
                        mb: 10,
                        width: "100%",
                        position: 'relative',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            p: 2,
                        }}
                    >
                        <Typography variant="h3">Hi, I'm Jared 👋 </Typography>
                        <Typography variant="h6">Web Developer</Typography>
                        <Box sx={{
                            mt: 1,
                            // mx: 1,
                            p: 1,
                            borderTop: `3px solid ${theme.palette.secondary.light}`

                        }}>
                            <Typography variant="subtitle1">Click to see some of my projects.</Typography>
                            <Button
                                sx={{
                                    mt: 1,
                                    mx: 1,
                                    // justifySelf: 'start',
                                    alignSelf: 'start',
                                    width: 150,
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    alignItems: 'center'
                                }} component={Link} to="/projects" variant='contained' color='primary'>Projects <ArrowForwardIosIcon fontSize='small' />
                            </Button>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            mt: { xs: 3, sm: 0 },
                            p: { xs: .5, sm: 1, md: 2 },
                            pl: 0,
                            'img': {
                                minWidth: { xs: '100%' },
                                maxWidth: { xs: '100%', md: 'auto' },
                                maxHeight: { xs: '100%', md: '300px' },

                            }
                        }}
                    >
                        <img src={avatar} alt='avatar' />
                    </Box>
                </Box>
                <AboutMe />
            </Container>
            <Footer />
        </Container>
    )
};

export default Home;