/* eslint-disable prettier/prettier */
import React, { useEffect } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import Paper from "@material-ui/core/Paper";

import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import RoomList from "../RoomList/RoomList";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    overflow: "hidden",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light" ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Home() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "CHANGE_ROOM_NAME", payload: "Micron" });
  }, []);
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        className={classes.box}
      >
        <div className={classes.paper}>
          <img
            src="https://micron-web.herokuapp.com/images/micron.ico"
            width="200px"
            style={{ marginBottom: "4rem" }}
          />
          <Typography variant="h5" gutterBottom align="center">
            Welcome to the brand new chat experience.
          </Typography>
          <div className={classes.form} noValidate>
            <RoomList page="Home" />
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
