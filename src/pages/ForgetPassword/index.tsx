"use client"

import React, { useReducer } from 'react'
import Input from '../../components/Input'
import { Box, Grid, Typography, Button } from '@mui/material'
import 'public/assets/css/globals.css'
import Link from 'next/link'

const ForgetPassword = () => {
  const [state, setState] = useReducer(
    (prevState : any, newState: any) => ({
      ...prevState,
      ...newState,
    }),
    {
      otp: ""
    }
  )
  const {otp} = state

  const handleChangeValue = (e : any) => {
    const {name, value} = e.target
    setState({[name] : value})
  }

  const handleClick = () => {
    console.log(state)
  }
  return (
    <Grid container spacing={2} className='h-screen'>
      <Grid item xs={12} sm={12} md={9} lg={9} className='bg-signIn-left flex items-center justify-center'>
        <Box>
          <Typography variant="h4" className='text-primary mb-14 text-center text-2xl lg:text-3xl'>FORGET YOUR PASSWORD?</Typography>
          <Box className="flex flex-col gap-5 mb-10">
            <Input
              placeholder='Enter your OTP from Email'
              name='otp'
              value={otp}
              onChange={handleChangeValue}
            />
          </Box>
          <Button 
            variant="contained" 
            fullWidth
            className='bg-primary hover:bg-primary'  
            size='large'
            href="/ChangePassword"
            onClick={handleClick}
          >CONTINUE</Button>
          <Link href="/SignUpModal" className='block min-[900px]:hidden lg:hidden mt-4'>
            <Typography variant="subtitle1" className='text-center text-primary mb-9 hover:underline'>Sign Up</Typography>
          </Link>
        </Box>
      </Grid>
      <Grid item xs={3} className='p-0 bg-signIn-right hidden min-[900px]:block lg:block'>
        <Box className="bg-[#1F293D] h-screen opacity-95 flex items-center">
          <Box className="px-5 h-3/5 flex flex-col justify-around">
            <Typography variant="h4" className='text-primary text-center text-2xl lg:text-3xl'> NEW HERE?</Typography>
            <Typography variant="h5" className='text-center text-white text-xl lg:text-2xl'>Sign up and discover the great movies!</Typography>
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

export default ForgetPassword