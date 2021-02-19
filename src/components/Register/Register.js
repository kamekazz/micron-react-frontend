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
import { useSnackbar } from "notistack";

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

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  function handleEnterUsername(e) {
    if (e.target.value == "") {
      enqueueSnackbar("Must input username", {
        variant: "warning",
        iconVariant: "warning",
        anchorOrigin: { vertical: "bottom", horizontal: "center" },
      });
    }
    setUsername(e.target.value);
  }

  function handleEnterPassword(e) {
    setPassword(e.target.value);
    if (e.target.value == "") {
      enqueueSnackbar("Must input password", {
        variant: "warning",
        iconVariant: "warning",
        anchorOrigin: { vertical: "bottom", horizontal: "center" },
      });
    }
  }

  function handleRegister() {
    if (username == "") {
      enqueueSnackbar("Must input username", {
        variant: "warning",
        iconVariant: "warning",
        anchorOrigin: { vertical: "bottom", horizontal: "center" },
      });
    } else if (password == "") {
      enqueueSnackbar("Must input password", {
        variant: "warning",
        iconVariant: "warning",
        anchorOrigin: { vertical: "bottom", horizontal: "center" },
      });
    } else {
      registerUser(username, password);
      enqueueSnackbar("The operation successfully done", {
        variant: "success",
        iconVariant: "success",
        anchorOrigin: { vertical: "bottom", horizontal: "center" },
      });
    }
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
            color="secondary"
            label="username"
            value={username}
            onChange={handleEnterUsername}
            onKeyDown={handleUserKeyDown}
          ></TextField>
        </Box>
        <Box>
          <TextField
            color="secondary"
            label="password"
            value={password}
            onChange={handleEnterPassword}
            onKeyDown={handleUserKeyDown}
            type="password"
          ></TextField>
        </Box>

        <Box mt={3}>
          <Button color="secondary" variant="contained" onClick={handleRegister}>
            Register
          </Button>
        </Box>
        <Box mt={3}>
          <Link to="/login">
            <Box color="white">Already have an account? Login here.</Box>
          </Link>
        </Box>
      </Box>
    </Dialog>
  );
}

export default Register;
