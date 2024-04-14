import { Grid } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Samplechats } from '../../contants/SampleData'
import Chatlist from '../specific/Chatlist'
import Profile from '../specific/Profile'
import Header from './Header'

const AppLayout = () => WrappedComponent => {
    return (props) => {
        const params = useParams();
        const chatId = params.chatId;

        const handleDeleteChat = (e, _id, groupChat)=>{
            e.preventDefault();
            console.log("Delete chat", _id, groupChat);
        }
        return (
            <div>
                {/* <Title /> */}
                <Header />

                <Grid container height={"calc(100vh - 4rem)"}>
                    <Grid item  sm={4} md={3} sx={{display:{ xs: "none", sm:"block"}}} height={"100%"}>
                        <Chatlist chats={Samplechats} chatId={chatId} handleDeleteChat={handleDeleteChat}/>
                    </Grid>
                    <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
                        <WrappedComponent {...props} />
                    </Grid>
                    <Grid item md={4} lg={3} sx={{display:{ xs:"none", md:"block"},padding: "2rem", bgcolor:"rgba(0,0,0,0.85)"}} height={"100%"}>
                        <Profile />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default AppLayout