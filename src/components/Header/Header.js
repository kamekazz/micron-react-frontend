import React from 'react'
import { useUser } from "../../hooks"
import { Box, Button, Grid, Typography } from "@material-ui/core"

function Header() {
    const { signOut } = useUser()
    return (
        <Grid container justify="space-between">
            <Grid item>
                <Typography>Micron</Typography>
            </Grid>
            <Grid item>
                <Button onClick={signOut}>Sign Out</Button>
            </Grid>
        </Grid>
    )
}

export default Header
