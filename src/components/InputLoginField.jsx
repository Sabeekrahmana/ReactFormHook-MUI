import React from 'react'
import { Button, TextField, Box, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const InputLoginField = ({ register, showPassword, userData, handleTogglePasswordVisibility, errors }) => {
    return (
        <>

            <Box id="inputBox">

                <Box >
                    <TextField fullWidth type="text" label="Email" variant="outlined" id="outlined-basic"
                        {...register('email', {
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9.!#$%&'*+/=?^-`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                message: 'Invalid Email Format'
                            },
                            validate: {
                                checkEmail: (fieldValue) => {
                                    return fieldValue === userData.email || 'Email does not Match'
                                }
                            }
                        })}
                        error={!!errors.email} helperText={errors.email?.message} />
                    <p>{errors.email?.message}</p>
                </Box>

                <Box>
                    <TextField fullWidth type={showPassword ? "text" : "password"} label="Password" variant="outlined"
                        {...register('password', {
                            required: 'Password is required',
                            validate: {
                                checkPass: (fieldValue) => {
                                    return fieldValue === userData.password || 'Password does not Match'
                                },
                            }
                        })}
                        error={!!errors.password} helperText={errors.password?.message}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='end' >
                                    <IconButton onClick={handleTogglePasswordVisibility}>
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }} />
                </Box>

                <Box>
                    <Button sx={{ width: "100%" }} variant='contained' color='success' type='submit' >Submitted</Button>
                </Box>
            </Box>
        </>
    )
}

export default InputLoginField;