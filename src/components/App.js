import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { SnackbarProvider } from "notistack";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "./Theme/theme";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <CssBaseline />
        </SnackbarProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
