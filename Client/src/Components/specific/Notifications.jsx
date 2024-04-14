import { Avatar, Button, Dialog, DialogTitle, ListItem, Stack, Typography } from '@mui/material'
import React, { memo } from 'react'
import { samplenotify } from '../../contants/SampleData'

const Notifications = () => {

  const FriendRequesthandler = ({ _id, accept }) => {

  }

  return (
    <Dialog open>
      <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"50rem"}>
        <DialogTitle>Notifications</DialogTitle>
        {
          samplenotify.length > 0 ? samplenotify.map(({sender, _id}) => <NotifyItem sender={sender} id={_id} handler={FriendRequesthandler} key={_id} />) : <Typography textAlign={"center"}>No Notifications</Typography>
        }
      </Stack>
    </Dialog>
  )
}

const NotifyItem = memo(({ sender, _id, handler }) => {
  const { name, avatar } = sender;
  return (
    <ListItem>
      <Stack direction={"row"} alignItems={"center"} spacing={'1rem'} width={"100%"}>
        <Avatar />
        <Typography variant='body1' 
        sx={{
          flexGrow: 1,
          display: "-webkit-box",
          WebkitLineClamp: 1,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}>
          {`${name} ! sent you a friend request.`}
        </Typography>
        <Stack direction={{
          xs: "column",
          sm: "row"
        }}>
          <Button onClick={() => handler({ _id, accept: true })}>Accept</Button>
          <Button color='error' onClick={() => handler({ _id, accept: false })}>Reject</Button>
        </Stack>
      </Stack>
    </ListItem>
  );
});

export default Notifications
