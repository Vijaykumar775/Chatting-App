import React from 'react'
import AdminLayout from '../../Components/layout/AdminLayout'
import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material'
import { AdminPanelSettings as AdminPanelSettingsIcon, Group as GroupIcon, Message as MessageIcon, Notifications as NotificationsIcon, Person as PersonIcon, Search as SearchIcon } from '@mui/icons-material'
import moment from 'moment'
import { CurveButton, SearchFeild } from '../../Components/styles/StyledComponents'
import { DoughnutChat, LineChat } from '../../Components/specific/Chats'

const Dashboard = () => {

  const appBar = <Paper elevation={3} sx={{padding:"1rem", margin:"1rem 0", borderRadius:"1rem"}}>
    <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
      <AdminPanelSettingsIcon sx={{fontSize:"3rem"}}/>
      <SearchFeild  placeholder='Search...'/>
      <CurveButton><SearchIcon /></CurveButton> 
      <Box flexGrow={1}/>
      <Typography
      display={{
        xs:"none",
        lg:"block",
      }}
      color={"rgba(0,0,0,0.7)"}
      textAlign={"center"}
      >{moment().format('dddd, MMMM Do YYYY')}</Typography>
      <NotificationsIcon />
    </Stack>
  </Paper>

  const Widgets = <Stack direction={{
    xs: "column",
    sm: "row"
  }}
  spacing="2rem"
  justifyContent="space-between"
  alignItems={"center"}
  margin={"1rem 0"}
  >
  <Widget title={"Users"} value={34} Icon={<PersonIcon />}/> 
  <Widget title={"Chats"} value={3} Icon={<GroupIcon />}/> 
  <Widget title={"Messages"} value={345} Icon={<MessageIcon />}/> 
  </Stack>

  return (
    <AdminLayout>
      <Container component={"main"}>
        {appBar}
        <Stack direction={{xs:"column", lg:"row"}} sx={{gap:"2rem"}} flexWrap={"wrap"} fontWeight={"600"} justifyContent={"center"}>
        <Paper 
        sx={{
          padding:"2rem 3rem",
          borderRadius:'1rem',
          width:'100%',
          maxWidth:"40rem",
          height:'25rem'
        }}
        >
          <Typography fontWeight={"600"} fontSize={"1.3rem"} margin={"2rem 0"} variant='h4'>{""}Last Messages</Typography>
         <LineChat value={[20,6,8,2]}/>
        </Paper>

        <Paper 
        elevation={3}
        sx={{
          padding:'1rem',
          borderRadius:"1rem",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          width:{xs:"100%", sm:"50%"},
          maxWidth:"25rem",
          height:"25rem",
          
        }}>
        <DoughnutChat labels={["single Chats" , "Group Chats"]} value={[25,22]}/>
        <Stack
        position={"absolute"}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={"0.5rem"}
        width={"100%"}
        height={"100%"}
        >
        <GroupIcon /> <Typography>Vs</Typography>
        <PersonIcon />
        </Stack>
        </Paper>
        </Stack>

        {
          Widgets
        }

      </Container>
    </AdminLayout>
  )
}

const Widget = ({title, value, Icon}) =>(

 <Paper
 sx={{
  padding:"2rem",
  margin:'2rem 0',
  borderRadius:"1rem",
  width:"20rem"
 }}
 >

<Stack alignItems={"center"} spacing={"1rem"}>
  <Typography sx={{
    color:"rgba(0,0,0,0.7)",
    borderRadius:"50%",
    border:"5px solid rgba(0,0,0,0.9)",
    width:"5rem",
    height:"5rem",
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  }}>{value}</Typography>
  <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>{Icon}
  <Typography>{title}</Typography>
  </Stack>
</Stack>

</Paper>
)

export default Dashboard
