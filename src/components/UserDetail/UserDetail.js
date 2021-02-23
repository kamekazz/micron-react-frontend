import React, { useState } from "react";
import { Dialog, Box, Typography, CardActionArea } from "@material-ui/core";

function UserDetail({ user }) {
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }
  console.log(user);
  return (
    <div>
      <CardActionArea onClick={handleOpen}>
        <Typography>{user.username}</Typography>
      </CardActionArea>
      <Dialog open={open} onClose={handleClose}>
        <Box p={3}>
          <Typography variant="h5">{user.username}</Typography>

          <Typography>
            Last Login: {new Date(user.last_login).toLocaleString()}
          </Typography>
          <Typography>
            Date Joined: {new Date(user.date_joined).toLocaleString()}
          </Typography>
          <Typography>Email: {user.email}</Typography>
          <Typography>{user.is_staff && "is staff"}</Typography>
          <Typography>{user.is_superuser && "is superuser"}</Typography>
        </Box>
      </Dialog>
    </div>
  );
}

export default UserDetail;
