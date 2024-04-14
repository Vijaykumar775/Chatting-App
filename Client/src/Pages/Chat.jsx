import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import React, { useRef } from 'react';
import Filemenu from '../Components/dialogs/Filemenu';
import AppLayout from '../Components/layout/AppLayout';
import { InputBox } from '../Components/styles/StyledComponents';
import { sampleMsg } from '../contants/SampleData';
import MessageCompoenets from '../Components/shared/MessageCompoenets';

const user = {
  _id:"absc",
  name:"vijaykumar garadkar"
}

const Chat = () => {
  const containerRef = useRef(null);
  return (
    <>
      <Stack ref={containerRef} boxSizing={"border-box"} padding={"1rem"} spacing={"1rem"} bgcolor={"lightgray"} height={"90%"} sx={{
        overflowX: "hidden",
        overflowY: "auto"
      }}>
      {
        sampleMsg.map((i)=>(
          <MessageCompoenets message={i} user={user} key={i._id}/>
        ))
      }
      </Stack>

      <form style={{
        height: "10%"
      }}>

        <Stack direction={"row"} padding={"0.6rem"} height={"100%"} alignItems={"center"} position={"relative"}>
          <IconButton sx={{
            position:"absolute",
            left:"1rem",
            rotate:"30deg",
          }}
          >
            <AttachFileIcon />
          </IconButton>
          <InputBox placeholder='Type Message Here...' />
          <IconButton type='submit'
           sx={{

            backgroundColor:"#57f213",
            color:"white",
            marginLeft:"1rem",
            padding:"0.5rem",
            "&:hover":{
              bgcolor:"green",
            }
          }}>
            <SendIcon />
          </IconButton>
        </Stack>
      </form>

      <Filemenu />


    </>

  )
}

export default AppLayout()(Chat);
