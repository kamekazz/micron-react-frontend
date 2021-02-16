import React, { useState } from "react";
import { useUser } from ".././../hooks";
import {
  TextField,
  Typography,
  Box,
  Dialog,
  makeStyles,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  dialog: {
    position: "absolute",
    top: 50,
    minWidth: "400px",
  },
});

function Login() {
  const classes = useStyles();
  const { authenticateUser } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleEnterUsername(e) {
    setUsername(e.target.value);
  }
  function handleEnterPassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit() {
    authenticateUser(username, password);
  }
  function handleUserKeyDown(e) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  return (
    <Dialog
      classes={{
        paper: classes.dialog,
      }}
      open
    >
      <Box py={2} px={4}>
        <Typography variant="h3">Sign In</Typography>
        <Box mt={3}>
          <TextField
            label="username"
            value={username}
            onChange={handleEnterUsername}
            onKeyDown={handleUserKeyDown}
          ></TextField>
        </Box>
        <Box>
          <TextField
            label="password"
            value={password}
            onChange={handleEnterPassword}
            onKeyDown={handleUserKeyDown}
            type="password"
          ></TextField>
        </Box>

        <Box mt={3}>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            login
          </Button>
        </Box>

        <Box mt={3}>
          <Link to="/register">
            <Box color="white">Don&apos;t have an account? Create one</Box>
          </Link>
        </Box>
      </Box>
    </Dialog>
  );
}

export default Login;
