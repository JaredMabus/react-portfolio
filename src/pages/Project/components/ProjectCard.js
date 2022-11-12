import {
    Typography,
    Button,
    Stack,
    Paper
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from "@mui/material/styles";
import theme from "../../../styles/style";
// ICONS
import GitHubIcon from '@mui/icons-material/GitHub';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';

const Card = styled(Paper)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 325,
    boxShadow: 'rgb(25 25 25 / 25%) 1px 2px 3px 2px',
    border: `1px solid ${theme.palette.secondary.main}45`,
    transition: '250ms ease-in-out',
    cursor: 'pointer',
    ":hover ": {
        border: `1px solid ${theme.palette.primary.main}30`
    },
    ":hover #project-desc": {
        visibility: 'visible'
    },
    ":hover #card-btn-stack": {
        visibility: 'visible'
    }
}));

const CardButton = styled(Button)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    m: 10,
    border: `1px solid ${theme.palette.primary.light}45`
}));


const ProjectCard = ({ data }) => {
    return (
        <>
            <Grid
                xs={12}
                sm={6}
                lg={4}
            >
                <Card>
                    <Stack
                        direction='row'
                        id="card-menu"
                        sx={{
                            display: 'flex',
                            alignItems: 'start',
                            justifyContent: 'space-between',
                            backgroundColor: theme.palette.secondary.light,
                            borderRadius: '4px 4px 0px 0px',
                            p: 1.5,
                            maxHeight: 62.5
                        }}
                    >
                        <Typography sx={{ fontWeight: 'bold' }} align='center' variant="h6">{data.title}</Typography>
                        <Stack id='card-btn-stack' sx={{ visibility: 'hidden' }} direction='row' spacing={1}>
                            <CardButton target="_blank" href={data.githubUrl}><GitHubIcon />Code</CardButton>
                            {data.designUrl && (<CardButton><BrushOutlinedIcon />Design</CardButton>)}
                        </Stack>
                    </Stack>
                    <Stack id='project-desc' sx={{ visibility: 'hidden', p: 2 }} direction='column' spacing={1}>
                        <Typography variant='body1'>{data.desc}</Typography>
                    </Stack>
                </Card>
            </Grid>
        </>
    )
}

export default ProjectCard;
