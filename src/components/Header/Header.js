import React from "react";
import { useUser } from "../../hooks";
import {
  makeStyles,
  IconButton,
  Grid,
  Typography,
  Menu,
  MenuItem,
  Box,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 2),
  },
}));

function Header() {
  const classes = useStyles();
  const { signOut } = useUser();
  const [anchorEl, setAnchorEl] = React.useState(null);

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
    <Box p={1}>
      <Grid
        container
        justify="space-between"
        className={classes.root}
        alignItems="center"
      >
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
          <Menu open={anchorEl} onClose={handleClose} anchorEl={anchorEl}>
            <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;
