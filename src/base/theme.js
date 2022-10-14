import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00AEEF",
    },
    secondary: {
      main: "#6da7de",
    },
    background: {
      default: "#1b2021",
      secondary: "#353d42",
    },
  },
  typography: {
    fontSize: 12,
    h1: {
      fontSize: "1.8rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2.6rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "2.2rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "2.2rem",
      fontWeight: 300,
    },
    h5: {
      fontSize: "1.2rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    caption: {
      fontSize: "11px",
      color: "#868b8e",
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#1b2021",
        },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: { borderTop: "1px dotted #ffff !important" },
      },
    },
  },
});

export const drawerBleeding = 40;
export const drawerWidth = 600;

export const darkTheme = responsiveFontSizes(theme);
