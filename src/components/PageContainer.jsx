import Footer from "./Footer";
import Nav from "./Nav";
import { Container } from '@mui/material';

const PageTemplate = (props) => {
    return (
        <Container sx={{ width: '100%', minHeight: '100vh' }} maxWidth={false} disableGutters={true} >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    minHeight: '100vh',
                }}
                maxWidth="xl"
            >
                <Nav />
                {props.children}
            </Container>
            <Footer />
        </Container >
    )
};

export default PageTemplate;