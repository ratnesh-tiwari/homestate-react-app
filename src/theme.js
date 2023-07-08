import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#213849",
      dark: "#192a37",
      light: "#29465b",
      lighter: "#546b7c"
    },
    neutral: {
      dark: "#aea69f",
      main: "#e1d9d2",
      light: "#f0ece9"
    },
    accent: {
      main: "#ffb277",
      light: "#ffd9bb"
    },
    background: {
      default: "#f7f6f4"
    }
  },
  typography: {
    fontFamily: ["Open Sans", "sans;serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Montserrat", "sans;serif"].join(","),
      fontSize: 42
    },
    h2: {
      fontFamily: ["Open Sans", "sans;serif"].join(","),
      fontSize: 32
    },
    h3: {
      fontFamily: ["Open Sans", "sans;serif"].join(","),
      fontSize: 24
    }
  }
});

export default theme;
