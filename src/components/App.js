import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { SnackbarProvider } from "notistack";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "./Theme/theme";
import Routes from "./Routes/Routes";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <CssBaseline />
          <Routes />
        </SnackbarProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
