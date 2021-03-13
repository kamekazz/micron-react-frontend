import React from "react";
import { useUser } from "../../hooks";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, IconButton, Typography, Menu, MenuItem } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: "900",
  },
}));

function Header() {
  const classes = useStyles();
  const { signOut } = useUser();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const roomName = useSelector((state) => state.messagesReducer.roomName);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    handleClose();
    signOut();
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            component={Link}
            to="/"
          >
            <img src="https://micron-web.herokuapp.com/images/micron.ico" width="28px" />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {roomName}
          </Typography>
          <IconButton onClick={handleClick}>
            <PersonIcon />
          </IconButton>
          <Menu open={Boolean(anchorEl)} onClose={handleClose} anchorEl={anchorEl}>
            <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
{
  /* <Box p={1}>
  <Grid container justify="space-between" className={classes.root} alignItems="center">
    <Grid xs={2} item container spacing={2} alignContent="center">
      <Grid item>
        <img src="https://micron-web.herokuapp.com/images/micron.ico" width="28px" />
      </Grid>
      <Grid item>
        <Typography>Micron</Typography>
      </Grid>
    </Grid>

    <Grid item xs></Grid>
    <Grid item xs={1}>
      <IconButton onClick={handleClick}>
        <PersonIcon />
      </IconButton>
      <Menu open={Boolean(anchorEl)} onClose={handleClose} anchorEl={anchorEl}>
        <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
      </Menu>
    </Grid>
  </Grid>
</Box>; */
}
