import {
  Box,
  Button,
  Stack,
  Typography,
  TextField,
  FormControl,
  Input,
  FormHelperText,
  InputLabel,
  Divider,
  Chip,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import DownloadIcon from "@mui/icons-material/Download";
import resumeData from "./resumeData";

const TechnicalSkills = ({ data }) => {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      sx={{
        my: 2,
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {data.content.map((tech) => (
        <Stack
          key={tech.category}
          sx={{
            alignItems: "center",
            p: 1,
            m: 0.5,
            maxHeight: 164,
            border: `2px solid ${theme.palette.primary.main}80`,
            borderRadius: 3,
          }}
        >
          <Typography
            sx={{ mb: 0.5, mx: 0.2, fontSize: ".8rem", fontWeight: 700 }}
            variant="body1"
          >
            {tech.category}:
          </Typography>
          <Stack
            direction="row"
            sx={{
              maxWidth: 130,
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
            }}
          >
            {tech.items.map((item) => {
              return (
                <Chip
                  key={item}
                  sx={{ m: 0 }}
                  size="small"
                  variant="outlined"
                  label={item}
                />
              );
            })}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

const ProfessionalExperience = ({ data }) => {
  const theme = useTheme();
  const dateOptions = {
    // weekday: "long",
    year: "numeric",
    month: "short",
    // day: "numeric",
  };
  return (
    <Stack
      direction="row"
      sx={{
        my: 2,
        flexWrap: "wrap",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {data.jobs.map((job) => (
        <Stack key={job.employer} sx={{ width: "100%" }}>
          <Stack
            sx={{ width: "100%", justifyContent: "space-between", mb: 2 }}
            direction="row"
          >
            <Stack>
              <Stack
                sx={{ width: "100%", alignItems: "baseline" }}
                direction="row"
              >
                <Typography
                  sx={{ mr: 1, fontWeight: 700 }}
                  align="center"
                  variant="subtitle1"
                >
                  {job.employer},
                </Typography>
                <Typography align="center" variant="body">
                  {job.location}
                </Typography>
                <Typography align="center" variant="body"></Typography>
              </Stack>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700, fontStyle: "italic" }}
              >
                {job.position}
              </Typography>
            </Stack>
            <Typography sx={{ fontWeight: 600 }} variant="body1">
              {new Date(job.startDate).toLocaleDateString("en-US", dateOptions)}
              - {new Date(job.endDate).toLocaleDateString("en-US", dateOptions)}
            </Typography>
          </Stack>
          {job.jobSummary.length > 0 && (
            <Typography variant="body1">{job.jobSummary}</Typography>
          )}
          <Box sx={{ p: 0.5, pl: 3 }}>
            <ul>
              {job.content.map((item) => (
                <li key={item}>
                  <Typography>{item}</Typography>
                </li>
              ))}
            </ul>
          </Box>
        </Stack>
      ))}
    </Stack>
  );
};

const Education = ({ data }) => {
  const theme = useTheme();
  return (
    <Stack
      direction="column"
      sx={{
        my: 2,
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {data.institution.map((ist) => (
        <Typography key={ist.name}>{ist.name}</Typography>
      ))}
    </Stack>
  );
};

export default function ResumePage() {
  const theme = useTheme();
  return (
    <>
      <Stack
        sx={{
          position: "relative",
          justifySelf: "center",
          alignSelf: "center",
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.secondary.main
              : "#fff",
          px: { xs: 3, sm: 7 },
          pt: 7,
          pb: 20,
          mt: 5,
          mb: 10,
          maxWidth: 1000,
          borderRadius: 2,
          boxShadow: "rgba(0 0 0 / 10%) 2px 2px 5px 2px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            justifySelf: "end",
            alignSelf: "end",
            top: 20,
          }}
        >
          <a href="Resume_old.pdf" download>
            <Button>
              <DownloadIcon fontSize="small" />
              Download
            </Button>
          </a>
        </Box>
        <Stack
          sx={{
            p: 1,
          }}
        >
          <Typography variant="h4">Jared Mabusth</Typography>
          <Stack
            sx={{
              gap: { xs: 1, sm: 2 },
              mt: 0.4,
              mb: 0.7,
              pl: 0.5,
              flexDirection: { xs: "column", sm: "row" },
            }}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Link
              style={{
                textDecoration: "none",
                color: theme.palette.text.primary,
              }}
              onClick={() => (window.location = "mailto:jwmabusth@gmail.com")}
            >
              jwmabusth@gmail.com
            </Link>
            <Link
              style={{
                textDecoration: "none",
                color: theme.palette.text.primary,
              }}
              href="https://github.com/JaredMabus"
            >
              GitHub
            </Link>
            <Typography variant="body1">Minneapolis, MN</Typography>
          </Stack>
          {resumeData.map((section) => (
            <Stack sx={{ py: 2 }} key={section.id}>
              <Typography
                sx={{
                  fontWeight: 600,
                  width: "100%",
                  borderBottom: `1px solid ${theme.palette.secondary.light}`,
                }}
                variant="h5"
              >
                {section.title}
              </Typography>
              {section.title === "Professional Summary" && (
                <Typography
                  sx={{
                    justifySelf: "center",
                    alignSelf: "start",
                    maxWidth: 800,
                    p: 1,
                  }}
                >
                  {section.content}
                </Typography>
              )}
              {section.title === "Technical Skills" && (
                <TechnicalSkills data={section} />
              )}
              {section.title === "Professional Experience" && (
                <ProfessionalExperience data={section} />
              )}
              {section.title === "Education" && <Education data={section} />}
            </Stack>
          ))}
        </Stack>
      </Stack>
    </>
  );
}
