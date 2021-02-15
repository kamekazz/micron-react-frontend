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

function Register() {
  const [username, setUsername] = useState("");
  const classes = useStyles();
  const [password, setPassword] = useState("");

  const { registerUser } = useUser();

  function handleEnterUsername(e) {
    setUsername(e.target.value);
  }

  function handleEnterPassword(e) {
    setPassword(e.target.value);
  }

  function handleRegister() {
    registerUser(username, password);
  }
  function handleUserKeyDown(e) {
    if (e.key === "Enter") {
      handleRegister();
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
        <Typography variant="h3">Create an account</Typography>
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
          <Button color="secondary" variant="contained" onClick={handleRegister}>Register</Button>
        </Box>
        <Box mt={3}>
          <Link to="/login">Already have an account? Login here.</Link>
        </Box>
      </Box>

    </Dialog >
  );
}

export default Register;
