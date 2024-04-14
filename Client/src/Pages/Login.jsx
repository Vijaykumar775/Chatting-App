import React, { useState } from 'react'
import { Avatar, Button, Container, IconButton, Paper, TextField, Typography, Stack } from '@mui/material'
import { CameraAlt as CameraAltIcon, Password } from '@mui/icons-material';
import { VisuallyHiddenInput } from '../Components/styles/StyledComponents';
import { useFileHandler, useInputValidation, useStrongPassword } from '6pp'
import { usernameValidator } from '../utiles/vaildators';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const Register = () => setIsLogin((prev => !prev));
    const name = useInputValidation("");
    const bio = useInputValidation("");
    const username = useInputValidation("", usernameValidator);
    const password = useStrongPassword();
    const avatar = useFileHandler("single");
    const handleLogin = (e) => {
        e.preventDefault();
    }
    const handleSingUp = (e) => {
        e.preventDefault();
    }

    return (
        <div style={{backgroundImage:"url(https://img.freepik.com/premium-vector/network-connection-background-abstract-style_23-2148875738.jpg)", objectFit:"cover", backgroundRepeat:"no-repeat", backgroundPosition:"center", backgroundSize: "100%"}}>
            <Container component={"main"} maxWidth='xs' sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>

                <Paper elevation={3} sx={{ padding: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>

                    {
                        isLogin ? <>
                            <Typography variant='h5'>Login</Typography>
                            <form style={{ width: "100%", marginTop: "1rem", }} onSubmit={handleLogin}>
                                <TextField required fullWidth label="Username" margin='normal' variant='outlined' value={username.value} onChange={username.changeHandler} />
                                <TextField required fullWidth label="Password" type='password' margin='normal' variant='outlined' value={password.value} onChange={password.changeHandler} />
                                <Button sx={{ marginTop: '1rem' }} variant="contained" color='primary' type='submit' fullWidth>Login</Button>
                                <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
                                <Button variant='text' onClick={Register}>Sign in instead</Button>
                            </form>
                        </> : <>
                            <Typography variant='h4' sx={{ marginTop: "1vh" }}>Sign Up</Typography>
                            <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                                <Avatar sx={{ width: "10rem", height: "10rem", objectFit: "contain" ,marginTop: "1vh" }} src={avatar.preview} />
                            </Stack>
                            <IconButton sx={{ position: "relative", bottom: "30px", left: "40px", color: 'white', bgcolor: "rgba(0,0,0,0.5)", ":hover": { bgcolor: "rgba(0,0,0,0.7)" }, }} component="label">
                                <>
                                    <CameraAltIcon />
                                    <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} />
                                </>
                            </IconButton>


                            <form style={{ width: "100%"}} onSubmit={handleSingUp}>
                                <TextField required fullWidth label="Name" margin='normal' variant='outlined' value={name.value} onChange={name.changeHandler} />
                                <TextField required fullWidth label="Bio" margin='normal' variant='outlined' value={bio.value} onChange={bio.changeHandler} />
                                <TextField required fullWidth label="Username" margin='normal' variant='outlined' value={username.value} onChange={username.changeHandler} />
                                {
                                    username.error && (
                                        <Typography color={"error"} variant='caption'>{username.error}</Typography>
                                    )
                                }
                                <TextField required fullWidth label="Password" type='password' margin='normal' variant='outlined' value={password.value} onChange={password.changeHandler} />
                                {
                                    password.error && (
                                        <Typography color={"error"} variant='caption'>{password.error}</Typography>
                                    )
                                }
                                <Button sx={{ marginTop: '1rem' }} variant="contained" color='primary' type='submit' fullWidth>Sign Up</Button>
                                <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
                                <Button variant='text' onClick={Register}>Login instead</Button>
                            </form>
                        </>
                    }

                </Paper>
            </Container>
        </div>
    )
}

export default Login
