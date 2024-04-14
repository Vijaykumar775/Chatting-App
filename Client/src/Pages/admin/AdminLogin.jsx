import React, { useState } from 'react'
import { Avatar, Button, Container, IconButton, Paper, TextField, Typography, Stack } from '@mui/material'
import { useInputValidation } from '6pp';
import { Navigate } from 'react-router-dom';

const isAddmin = true;


const AdminLogin = () => {
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submit");
    }
    const secretKey = useInputValidation("")

    if(isAddmin) return <Navigate to="/admin/dashboard" />;

    return (
        <div style={{ backgroundImage: "url(https://img.freepik.com/premium-vector/network-connection-background-abstract-style_23-2148875738.jpg)", objectFit: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "100%" }}>
            <Container component={"main"} maxWidth='xs' sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>

                <Paper elevation={3} sx={{ padding: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography variant='h5' fontWeight={"600"}>Admin</Typography>
                    <form style={{ width: "100%", marginTop: "1rem", }} onSubmit={submitHandler}>
                        <TextField required fullWidth label="Secret Key" type='password' margin='normal' variant='outlined' value={secretKey.value} onChange={secretKey.changeHandler} />
                        <Button sx={{ marginTop: '1rem' }} variant="contained" color='primary' type='submit' fullWidth>Login</Button>
                    </form>
                </Paper>
            </Container>
        </div>
    )
}

export default AdminLogin
