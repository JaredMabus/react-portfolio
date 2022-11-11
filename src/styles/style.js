import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#78E3B1",
            light: "#62615f",
            dark: "#292826",
        },
        secondary: {
            main: "#EEB405",
            light: "#f1c337",
            dark: "#a67d03",
        },
    },
    typography: {
        // fontSize: 14,
        allVariants: {
            color: "#E5E5E5",
        },
        fontFamily: [
            "Montserrat",
            "sans-serif",
        ].join(","),
        button: {
            textTransform: "none",
            fontWeight: "bold",
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