"use client"

import React, { useReducer } from 'react'
import Input from '../../components/Input'
import { Box, Grid, Typography, Button } from '@mui/material'
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import 'public/assets/css/globals.css'

const SignInModal = () => {
  const router = useRouter()
  const [state, setState] = useReducer(
    (prevState : any, newState: any) => ({
      ...prevState,
      ...newState,
    }),
    {
      username: "",
      password: ""
    }
  )
  const {username, password} = state

  const handleChangeValue = (e : any) => {
    const {name, value} = e.target
    setState({[name] : value})
  }

  const handleSignIn = () => {
    console.log(state)
    router.push('/Home')
  }

  return (
    <Grid container spacing={2} className='h-full'>
      <Grid item xs={9} className='bg-signIn-left flex items-center justify-center'>
        <Box className="w-[40%]">
          <Typography variant="h4" className='text-primary mb-14 text-center'> LOGIN TO YOUR ACCOUNT</Typography>
          <Box className="flex flex-col gap-5 mb-10">
            <Input
              placeholder='Username'
              name='username'
              value={username}
              onChange={handleChangeValue}
            />
            <Input
              placeholder='Password'
              name='password'
              type='password'
              value={password}
              onChange={handleChangeValue}
            />
          </Box>
          <Link href="/ForgetPassword">
            <Typography variant="subtitle1" className='text-right text-white mb-9'>Forget password ?</Typography>
          </Link>
          <Button 
            variant="contained" 
            fullWidth
            className='bg-primary hover:bg-primary'  
            size='large'
            onClick={handleSignIn}
          >SIGN IN</Button>
        </Box>
      </Grid>
      <Grid item xs={3} className='p-0 bg-signIn-right'>
        <Box className="bg-[#1F293D] h-screen opacity-95 flex items-center">
          <Box className="px-5 h-3/5 flex flex-col justify-around">
            <Typography variant="h4" className='text-primary text-center'> NEW HERE?</Typography>
            <Typography variant="h5" className='text-center text-white'>Sign up and discover the great movies!</Typography>
            <Button 
              variant="outlined" 
              href="/SignUpModal" 
              fullWidth
              className='text-primary border-primary hover:border-primary'
            >
              SIGN UP
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}

export default SignInModal