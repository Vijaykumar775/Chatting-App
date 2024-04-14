import { Close as CloseIcon, Dashboard as DashboardIcon, ExitToApp as ExitToAppIcon, Group as GroupIcon, ManageAccounts as ManageAccountsIcon, Menu as MenuIcon, Message as MessageIcon } from '@mui/icons-material';
import { Box, Drawer, Grid, IconButton, Stack, Typography, styled } from '@mui/material';
import React, { useState } from 'react'
import { useLocation, Link as LinkComponent, Navigate } from 'react-router-dom';



const Link = styled(LinkComponent)`
text-decoration :none;
border-radius: 2rem;
padding: 1rem 2rem ;
color: black;
&:hover{
    color: rgba(0,0,0,0.54);
}

`

export const AdminTabs = [
    {
        name: 'Dashboard',
        path: '/admin/dashboard',
        icon: <DashboardIcon />,
    },
    {
        name: 'users',
        path: '/admin/usersmanagement',
        icon: <ManageAccountsIcon />,
    },
    {
        name: 'Chats',
        path: '/admin/chatsmanagement',
        icon: <GroupIcon />,
    },
    {
        name: 'Messages',
        path: '/admin/messagesmanagement',
        icon: <MessageIcon />,
    },
]

const SideBar = ({ w = "100%" }) => {
    const location = useLocation();
    const logoutHanlder = () =>{
        console.log("logout")
    }
    return (

        <Stack width={w} direction={"column"} p={'2rem'} spacing={"2rem"}>
            <Typography variant='h5' textTransform={"uppercase"}>Admin</Typography>
            <Stack spacing={'1rem'}>
                {
                    AdminTabs.map((tab) => (
                        <Link key={tab.path} to={tab.path} 
                        sx={[
                            location.pathname === tab.path &&{
                                bgcolor: "#2d2d2f",
                                color:"white",
                                ":hover":{color:"#fff"},
                            }
                        ]}
                         >
                            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
                                {tab.icon}
                                <Typography>{tab.name}</Typography>
                            </Stack>
                        </Link>
                    ))
                }

                <Link onClick={logoutHanlder}>
                            <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
                               <ExitToAppIcon />
                                <Typography>Logout</Typography>
                            </Stack>
                        </Link>

            </Stack>
        </Stack>
    )

}

const AdminLayout = ({ children }) => {

    const isAdmin = true;

    const [isMobile, setisMobile] = useState(false)
    const handleMobile = () => {
        setisMobile(!isMobile);
    };
    const hanleClose = () => {
        setisMobile(false);
    };

    if(!isAdmin) return <Navigate to='/admin' />

    return (
        <Grid container minHeight={"100vh"}>
            <Box 
                sx={{
                    display: { xs: "block", md: "none" },
                    position:"fixed",
                    right: "1rem",
                    top: "1rem",
                }}>
                <IconButton onClick={handleMobile}>
                    {
                        isMobile ? <CloseIcon /> : <MenuIcon />
                    }
                </IconButton>
            </Box>

            <Grid item md={4} lg={3} sx={{ display: { xs: "none", md: "block" } }}>
                <SideBar />
            </Grid>

            <Grid item xs={12} md={8} lg={9} sx={{ bgcolor: "lightGray" }}>
                {children}
            </Grid>

            <Drawer open={isMobile} onClose={hanleClose}>
                <SideBar w="50vw"
                />
            </Drawer>

        </Grid>
    );
};

export default AdminLayout
