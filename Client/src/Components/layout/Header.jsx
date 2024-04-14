import { Add as AddIcon, Group as GroupIcon, Logout as LogoutIcon, Menu as MenuIcon, Notifications as NotificationsIcon, Search as SearchIcon } from "@mui/icons-material"
import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { Suspense, lazy, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { orange } from '../../contants/color'

const SearchDialog = lazy(() => import("../specific/Search"));
const NotificationsDialog = lazy(() => import("../specific/Notifications"));
const NewGroupDialog = lazy(() => import("../specific/NewGroup"));

const Header = () => {

    const navigate = useNavigate();

    const [mobile, setMobile] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [isNewGroup, setIsNewGroup] = useState(false);
    const [isNotification, setIsNotification] = useState(false);

    const handleMobile = () => {
        setMobile(prev => !prev);
    }

    const openSearhDialog = () => {
        setIsSearch(prev => !prev);
    }

    const openNotification = () => {
        setIsNotification(prev => !prev);
    }

    const opneNewGroup = () => {
        setIsNewGroup(prev => !prev);
    }

    const NavigateTOGroup = () => navigate("/group");


    const logoutHandler = () => {
        console.log("logoutHandler")
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }} height={"4rem"}>
                <AppBar position='static' sx={{ bgcolor: orange }}>
                    <Toolbar >
                        <Typography variant='h5' sx={{ display: { xs: "none", sm: "block" } }}>Chating App</Typography>
                        <Box sx={{ display: { xs: "block", sm: "none" } }}>
                            <IconButton color='inherit' onClick={handleMobile}>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box>
                            <Tooltip title="Search">
                                <IconButton color='inherit' size='large' onClick={openSearhDialog}>
                                    <SearchIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="New Group">
                                <IconButton color='inherit' size='large' onClick={opneNewGroup}>
                                    <AddIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Manage Groups">
                                <IconButton color='inherit' size='large' onClick={NavigateTOGroup}>
                                    <GroupIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Notifications">
                                <IconButton color='inherit' size='large' onClick={openNotification}>
                                    <NotificationsIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Logout">
                                <IconButton color='inherit' size='large' onClick={logoutHandler}>
                                    <LogoutIcon />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            {
                isSearch && (
                    <Suspense fallback={<Backdrop open />}>
                        <SearchDialog />
                    </Suspense>
                )
            }
            {
                isNotification && (
                    <Suspense fallback={<Backdrop open />}>
                        <NotificationsDialog />
                    </Suspense>
                )
            }
            {
                isNewGroup && (
                    <Suspense fallback={<Backdrop open />}>
                        <NewGroupDialog />
                    </Suspense>
                )
            }
        </>
    )
}

export default Header
