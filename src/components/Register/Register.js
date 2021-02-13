import React, { useState } from "react";
import { useUser } from ".././../hooks";
import { TextField, Typography, Box, Dialog, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles({
  dialog: {
    position: 'absolute',
    top: 50,
    minWidth: '400px',
  },
});

function Register() {

    const [username, setUsername] = useState("")
    const classes = useStyles();
    const [password, setPassword] = useState("")

    function handleEnterUsername(e) {
        setUsername(e.target.value);
    }

    function handleEnterPassword(e) {
        setPassword(e.target.value);
    }

    function handleRegister() {
        console.log("register")
    }

    return (
        <>
        <Typography>Create an account</Typography>
        <Box mt={3}>
            <TextField
            label="username"
            value={username}
            onChange={handleEnterUsername}
            ></TextField>
        </Box>
        <Box>
            <TextField
            label="password"
            value={password}
            onChange={handleEnterPassword}
            ></TextField>
        </Box>

        <Button onClick={handleRegister}>Register</Button>
        </>
    )
}

export default Register;
