import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    background: {
      default: "#19647E",
    },
    primary: {
      main: "#28AFB0",
    },
    secondary: {
      main: "#19647E",
      dark: "#28AFB0",
      contrastText: "#fff",
    },
    type: "dark",
  },
  shadows: ["none"],
});
