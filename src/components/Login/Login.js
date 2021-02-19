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

function Login() {
  const classes = useStyles();
  const { authenticateUser } = useUser();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  function handleEnterUsername(e) {
    setUsername(e.target.value);
    if (e.target.value == "") {
      enqueueSnackbar("Must input username", {
        variant: "warning",
        iconVariant: "error",
        anchorOrigin: { vertical: "bottom", horizontal: "center" },
      });
    }
  }
  function handleEnterPassword(e) {
    setPassword(e.target.value);
    if (e.target.value == "") {
      enqueueSnackbar("Must input password", {
        variant: "warning",
        iconVariant: "error",
        anchorOrigin: { vertical: "bottom", horizontal: "center" },
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    authenticateUser(username, password)
      .then(() => {
        enqueueSnackbar("Successfully Loged in!", {
          variant: "success",
          iconVariant: "success",
          anchorOrigin: { vertical: "bottom", horizontal: "center" },
        });
      })
      .catch((error) => {
        enqueueSnackbar("Your username or password wrong", {
          variant: "error",
          iconVariant: "error",
          anchorOrigin: { vertical: "bottom", horizontal: "center" },
        });
      });
  }
  function handleUserKeyDown(e) {
    if (e.key === "Enter") {
      handleSubmit(e);
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
