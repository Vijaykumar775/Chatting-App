import React from 'react'
import AppLayout from '../Components/layout/AppLayout'
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box sx={{backgroundImage:"url(https://mir-s3-cdn-cf.behance.net/project_modules/1400/b65d48104353905.5f611e5244f3e.jpg)", backgroundPosition:"center", objectFit:"cover", backgroundSize:"40rem",backgroundRepeat:"no-repeat"}} height={"100%"}>
      <Typography p={"2rem"} variant='h5' textAlign={"center"} >Select a Friend to chat</Typography>
    </Box>
  )
}

export default AppLayout()(Home);

