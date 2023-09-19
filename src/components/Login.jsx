import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Typography, Box, Modal } from '@mui/material';
import InputLoginField from './InputLoginField';

const Login = () => {

    const { handleSubmit, register, formState: { errors }, reset } = useForm();
    const [userData, setUserdata] = useState({})
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()

    const onSubmit = (data) => {
        reset();
        setOpen(true);

    };

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
        navigate('/');

    };
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };


    useEffect(() => {
        const storedData = localStorage.getItem('formData');

        if (storedData) {
            const formData = JSON.parse(storedData);
            setUserdata(formData)
        } else {
            console.log('No data found in local storage');
        }
    }, [])

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <Box sx={{ width: "400px", height: "400px", borderRadius: "20px", backgroundColor: "white", padding: "20px" }}>
                <form onSubmit={handleSubmit(onSubmit)} action='/'>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "10px", marginBottom: "30px"
                    }}>
                        <Link id='link' to='/login'><Typography variant="h5"
                            sx={{
                                padding: "5px",
                                background: 'linear-gradient(to left, black, rgba(29, 29, 217, 1) 79%)',
                                color: "white", borderRadius: "5px", fontWeight: 500, '&:hover': {
                                    background: 'linear-gradient(to right, black, rgba(29, 29, 217, 1) 79%)',
                                }
                            }}>LOGIN</Typography></Link>
                        <Link id='link' to='/'><Typography variant="h5"
                            sx={{
                                padding: "5px",
                                color: "darkblue", borderRadius: "5px", fontWeight: 500, '&:hover': {
                                    background: 'linear-gradient(to right, black, rgba(29, 29, 217, 1) 79%)',
                                    color: 'white'
                                }

                            }}>SIGNUP</Typography></Link>
                    </Box>

                    <InputLoginField register={register}
                        userData={userData}
                        errors={errors}
                        showPassword={showPassword}
                        handleTogglePasswordVisibility={handleTogglePasswordVisibility} />

                </form >
            </Box >

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: '300px', display: "flex", alignItems: "center", flexDirection: "column" }}>
                    <h5 >Submitted Successfully</h5>
                    <Button variant='contained' size='small' onClick={handleClose}>Go Back</Button>
                </Box>
            </Modal>
        </>
    )
}

export default Login;