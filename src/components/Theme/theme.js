import { createMuiTheme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";


const theme = createMuiTheme({
    palette: {
        background: {
            default: grey[200]
        },
        primary: {
            main: "#3C6E71"
        },
        secondary: {
            main: "#483C46"
        }
    }
});

export default theme;
