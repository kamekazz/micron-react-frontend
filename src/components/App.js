import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { SnackbarProvider } from "notistack";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "./Theme/theme";
import Routes from "./Routes/Routes";
import Header from "./Header/Header";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <CssBaseline />
          <Header />
          <Routes />
        </SnackbarProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
