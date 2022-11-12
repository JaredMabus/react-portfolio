import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#78E3B1",
            light: "#A2EBC8",
            dark: "#58B488",
        },
        secondary: {
            main: "#21262E",
            light: "#21262E",
            dark: "#0D1117",
        },
    },
    typography: {
        allVariants: {
            color: "#E5E5E5",
        },
        h1: {
            fontWeight: 500
        },
        h2: {
            fontWeight: 500
        },
        h3: {
            fontWeight: 500
        },
        h4: {
            fontWeight: 600
        },
        body: {
            fontSize: 18
        },
        fontFamily: [
            "Montserrat",
            "sans-serif",
        ].join(","),
        button: {
            textTransform: "none",
            fontWeight: 700,
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});


export default theme;