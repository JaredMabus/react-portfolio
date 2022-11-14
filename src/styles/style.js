import { createTheme } from "@mui/material/styles";

const otherThemes = {
    typography: {
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
        h5: {
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
    }
}

export const themeLight = createTheme({
    ...otherThemes,
    palette: {
        mode: "light",
        background: {
            default: '#fafafa'
        },
        text: {
            primary: "#21262E"
        },
        primary: {
            // main: "#78E3B1",
            main: "#58B488",
            light: "#A2EBC8",
            dark: "#58B488",
        },
        secondary: {
            main: "#EFF3F7",
            light: "#eeee",
            dark: "#C1C1C1",
        },
        action: {
            textDecoration: 'none',
            color: '#78e3b1',
        },
        components: {
            // Name of the component
            MuiButton: {
              styleOverrides: {
                // Name of the slot
                root: {
                  // Some CSS
                  fontSize: '4rem',
                  color: 'red'
                },
              },
            },
          },
    },
});

export const themeDark = createTheme({
    ...otherThemes,
    palette: {
        mode: "dark",
        background: {
            default: 'rgb(13, 17, 23)'
        },
        text: {
            primary: "#E5E5E5"
        },
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
        action: {
            textDecoration: 'none',
            color: '#78e3b1',
        },
        components: {
            // Name of the component
            MuiButton: {
              styleOverrides: {
                // Name of the slot
                root: {
                  // Some CSS
                  fontSize: '4rem',
                  color: 'red'
                },
              },
            },
        },
    }
});