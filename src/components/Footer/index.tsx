import { Box, Grid, Typography } from '@mui/material'
import { Icon } from '@iconify/react';
import React from 'react'

const Footer = () => {
  return (
    <Box className='bg-sliderBg px-8 pt-20 hidden lg:block md:block'>
        <Grid container className='border-b border-b-white pb-10'>
            <Grid item xs={6}>
                <Box className="flex items-center text-primary">
                    <img src="/assets/images/Logo.svg" alt="logo" />
                    <Typography variant='h5'>Movie Point</Typography>
                </Box>
                <Box className="flex gap-4 px-4">
                    <Icon icon="devicon:facebook" className='w-[28px] h-[28px] cursor-pointer'/>
                    <Box className="bg-[#DD4B39] inline-block text-white cursor-pointer">
                        <Icon icon="mdi:google-plus" className='w-[28px] h-[28px]' />
                    </Box>
                    <Icon icon="skill-icons:twitter" className='w-[28px] h-[28px] cursor-pointer'/>
                    <Box className="bg-[#00B489] inline-block text-white cursor-pointer">
                        <Icon icon="jam:vine" className='w-[28px] h-[28px]'/>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={3} className='text-white flex flex-col justify-center gap-4 pt-2'>
                <Typography variant='h5'>Useful Links</Typography>
                <Box className="flex flex-col gap-2">
                    <Typography variant='body2' className='cursor-pointer hover:text-primary'>Home</Typography>
                    <Typography variant='body2' className='cursor-pointer hover:text-primary'>About us</Typography>
                    <Typography variant='body2' className='cursor-pointer hover:text-primary'>Contact</Typography>
                </Box>
            </Grid>
            <Grid item xs={3} className='text-white flex flex-col justify-center gap-4 pt-2'>
                <Typography variant='h5'>Product Help</Typography>
                <Box className="flex flex-col gap-2">
                    <Typography variant='body2' className='cursor-pointer hover:text-primary'>FAQ</Typography>
                    <Typography variant='body2' className='cursor-pointer hover:text-primary'>Privacy Policy</Typography>
                    <Typography variant='body2' className='cursor-pointer hover:text-primary'>Support</Typography>
                </Box>
            </Grid>
        </Grid>
        <Box className="flex gap-2 text-white p-4">
            <Typography>
                © 2023  Movie Point. All Rights Reserved. Design & Develop By
            </Typography>
            <Typography className='text-primary'>
                @DoNho and @ThuyTien
            </Typography>
        </Box>
    </Box>
  )
}

export default Footer