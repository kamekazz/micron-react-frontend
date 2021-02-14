import React, { useState } from 'react'
import { useUser } from "../../hooks"
import { makeStyles, IconButton, Grid, Typography, Menu, MenuItem } from "@material-ui/core"
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.grey[200],
        padding: theme.spacing(0, 2)
    }
}))

function Header() {
    const classes = useStyles()
    const { signOut } = useUser()
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
      handleClose()
      signOut()
  }

    return (
        <Grid container justify="space-between" className={classes.root} alignItems="center">
            <Grid item>
                <Typography>Micron</Typography>
            </Grid>
            <Grid item>
                <IconButton onClick={handleClick}><PersonIcon /></IconButton>
                <Menu open={anchorEl} onClose={handleClose}         anchorEl={anchorEl}>
                    <MenuItem onClick={handleSignOut}>
                        Sign Out
                    </MenuItem>
                </Menu>
            </Grid>
        </Grid>
    )
}

export default Header
