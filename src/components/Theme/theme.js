import { createMuiTheme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "#29272B",
    },
    text: {
      primary: "#EFEFF4",
    },
    primary: {
      main: "#902BBA",
    },
  },
});

export default theme;
