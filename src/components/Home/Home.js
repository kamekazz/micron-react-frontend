import { Grid } from '@material-ui/core'
import React from 'react'
import RoomList from '../RoomList/RoomList'


function Home() {
    return (
        <Grid container >
            <Grid item xs={4}>
                <RoomList />
            </Grid>
            <Grid item xs={8}>
                
            </Grid>
        </Grid>
    )
}

export default Home
