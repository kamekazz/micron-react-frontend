import React, { useState } from 'react'
import { Dialog, Box, Grid, Typography, Button } from "@material-ui/core"

function UserDetail({ user }) {

    const [open, setOpen] = useState(false)

    function handleClose() {
        setOpen(false)
    }

    function handleOpen() {
        setOpen(true)
    }

    return (
        <div>
            <Button onClick={handleOpen}>
                {user.username}
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <Box p={3}>
                    <Typography variant="h5">{user.username}</Typography>

                    <Typography>last_login: {(new Date(user.last_login).toLocaleString())}</Typography>
                    <Typography>date_joined: {(new Date(user.date_joined).toLocaleString())}</Typography>
                    <Typography>{user.is_staff && "is staff"}</Typography>
                    <Typography>{user.is_superuser && "is superuser"}</Typography>
                </Box>
            </Dialog>
        </div>
    )
}

export default UserDetail
