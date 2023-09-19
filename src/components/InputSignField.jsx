import React from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, IconButton, InputAdornment, TextField } from '@mui/material';


const InputSignField = ({ register, errors, showPassword, pwdWatch, handleTogglePasswordVisibility }) => {
  return (
    <>
      <Box id='inputBox'>
        <Box >
          <TextField fullWidth type="text" label="UserName" variant="outlined"
            {...register('username',
              {
                required: 'Username is required',
              })}
            error={!!errors.username} helperText={errors.username?.message} />
        </Box>

        <Box>
          <TextField fullWidth type="text" label="Email" variant="outlined"
            {...register('email',
              {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&'*+/=?^-`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: 'Invalid Email Format '
                }
              }
            )}
            error={!!errors.email} helperText={errors.email?.message} />
        </Box>

        <Box >
          <TextField fullWidth type={showPassword ? 'text' : 'password'} label="Password" variant="outlined"
            {...register('password', {
              required: 'Password is required',
              validate: {
                checkPass: (fieldValue) => {
                  return fieldValue.length >= 6 || 'Password 6 characters must'
                }
              }
            })}
            error={!!errors.password} helperText={errors.password?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end' >
                  <IconButton onClick={handleTogglePasswordVisibility}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }} />
        </Box>

        <Box >
          <TextField fullWidth type="password" label="ConfirmPassword" variant="outlined"
            {...register('confirmPassword', {
              required: 'ConfirmPassword is required',
              validate: {
                checkPass: (fieldValue) => {
                  return fieldValue === pwdWatch || 'Password does not match'
                }
              }
            })}
            error={!!errors.confirmPassword} helperText={errors.confirmPassword?.message} />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button sx={{ width: "100%" }} variant='contained' color='success' type='submit'>Sign In</Button>
        </Box>
      </Box>
    </>
  )
}

export default InputSignField;