import { Box, Button, Modal, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react'
import InputSignField from './InputSignField';

const SignUp = () => {
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const pwdWatch = watch('password')
    const navigate = useNavigate()

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
        navigate('/login');
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

    const onSubmit = (data) => {
        localStorage.setItem('formData', JSON.stringify(data));
        reset();
        setOpen(true);
    }

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <Box sx={{ width: "350px", height: "600px", borderRadius: "20px", backgroundColor: "white", padding: "20px" }}>

                <form onSubmit={handleSubmit(onSubmit)} action='/login' >
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between", margin: "10px", marginBottom: "30px"
                    }}>
                        <Link id='link' to='/login'><Typography variant="h5" sx={{
                            padding: "5px",
                            color: "darkblue", borderRadius: "5px", fontWeight: 500, '&:hover': {
                                background: 'linear-gradient(to right, black, rgba(29, 29, 217, 1) 79%)',
                                color: 'white'
                            }
                        }}>LOGIN</Typography></Link>
                        <Link id='link' to='/'><Typography variant="h5" sx={{
                            padding: "5px",
                            background: 'linear-gradient(to left, black, rgba(29, 29, 217, 1) 79%)',
                            color: "white", borderRadius: "5px", fontWeight: 500, '&:hover': {
                                background: 'linear-gradient(to right, black, rgba(29, 29, 217, 1) 79%)',
                            }
                        }}>SIGNUP</Typography></Link>
                    </Box>

                    <InputSignField register={register}
                        errors={errors}
                        pwdWatch={pwdWatch}
                        showPassword={showPassword}
                        handleTogglePasswordVisibility={handleTogglePasswordVisibility} />

                </form>
            </Box>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: '300px', display: "flex", alig: "center", flexDirection: "column" }}>
                    <h5>Registered Successfully</h5>
                    <Button variant='contained' size='small' onClick={handleClose}>Go to LoginPage</Button>
                </Box>
            </Modal>
        </>
    )
}

export default SignUp;