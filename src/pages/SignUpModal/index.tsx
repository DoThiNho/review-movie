import React, { useReducer } from 'react'
import Input from '../../components/Input'
import { Box, Grid, Typography, Button } from '@mui/material'
import 'public/assets/css/globals.css'


const SignUpModal = () => {
  const [state, setState] = useReducer(
    (prevState : any, newState: any) => ({
      ...prevState,
      ...newState,
    }),
    {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  )
  const {username,email, password, confirmPassword} = state

  const handleChangeValue = (e : any) => {
    const {name, value} = e.target
    setState({[name] : value})
  }

  const handleSignUp = () => {
    console.log(state)
  }
  return (
    <Grid container spacing={2} className='h-full'>
      <Grid item xs={9} className='bg-signIn-left flex items-center justify-center'>
        <Box className="w-[40%]">
          <Typography variant="h4" className='text-primary mb-14 text-center'>CREATE YOUR ACCOUNT</Typography>
          <Box className="flex flex-col gap-5 mb-10">
            <Input
              placeholder='Username'
              name='username'
              value={username}
              onChange={handleChangeValue}
            />
            <Input
              placeholder='Your email'
              name='email'
              value={email}
              onChange={handleChangeValue}
            />
            <Input
              placeholder='Password'
              name='password'
              type='password'
              value={password}
              onChange={handleChangeValue}
            />
            <Input
              placeholder='Re-type password'
              name='confirmPassword'
              type='password'
              value={confirmPassword}
              onChange={handleChangeValue}
            />
          </Box>
          <Button 
            variant="contained" 
            fullWidth
            className='bg-primary hover:bg-primary'  
            size='large'
            onClick={handleSignUp}
          >SIGN UP</Button>
        </Box>
      </Grid>
      <Grid item xs={3} className='p-0 bg-signIn-right'>
        <Box className="bg-[#1F293D] h-screen opacity-95 flex items-center">
          <Box className="px-5 h-3/5 flex flex-col justify-around">
            <Typography variant="h4" className='text-primary text-center'> ALREADY HAVE ?</Typography>
            <Typography variant="h5" className='text-center text-white'>Sign in and discover the great movies!</Typography>
            <Button 
              variant="outlined" 
              href="/SignInModal" 
              fullWidth
              className='text-primary border-primary hover:border-primary'
            >
              SIGN IN
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default SignUpModal