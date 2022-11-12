import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import ProjectGrid from "./components/ProjectGrid";
import { projectData } from "./projectData";
import {
    Box,
    Container,
    Typography,
    Stack
} from '@mui/material';


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
                <Stack sx={{ minWidth: '100%', display: 'flex' }} direction='column'>
                    <Typography sx={{ alignSelf: 'center', p: 1, mb: 3 }} variant="h3">Projects</Typography>
                    <ProjectGrid data={projectData} />
                </Stack>
            </Container>
            <Footer />
        </Container>
    )
};

export default Project;