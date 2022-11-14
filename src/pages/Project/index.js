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
import PageContainer from "../../components/PageContainer";


const Project = () => {
    return (
        <PageContainer>
            <Stack sx={{ minWidth: '100%', display: 'flex', mt: 5 }} direction='column'>
                <Typography sx={{ alignSelf: 'center', p: 1, mb: 3 }} variant="h4">Projects</Typography>
                <ProjectGrid data={projectData} />
            </Stack>
        </PageContainer>
    )
};

export default Project;