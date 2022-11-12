import {
    Box,
    Typography,
    Button,
    Stack,
    Paper
} from '@mui/material';
import ProjectCard from "./ProjectCard";
import Grid from '@mui/material/Unstable_Grid2';

const ProjectGrid = ({ data }) => {
    return (
        <>
            <Box sx={{ flexGrow: 1, mb: 15 }}>
                <Grid container spacing={3}>
                    {data.map(project => {
                        return <ProjectCard key={project.id} data={project} />
                    })}
                </Grid>
            </Box>
        </>
    )
}

export default ProjectGrid;