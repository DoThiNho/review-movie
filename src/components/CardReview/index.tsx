import { Box, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

interface CardReviewProps {
    name?: string
    img?: string
    time?: string
    text?: string
}

const CardReview = ({
    name,
    img,
    time,
    text
}: CardReviewProps) => {
  return (
    <Card className='w-full h-[200px] mb-8 bg-[#1F293D]'>
      <Grid container spacing={2} className="flex h-full w-full m-0">
        <Grid xs={10} className="flex">
            <CardMedia
                component="img"
                alt="green iguana"
                style={{ width: "140px", height: "100%", objectFit: "cover", padding:"8px",  borderRadius: "10px" }}
                image="/assets/images/the_batman.jpg"
                />
            <CardContent className="text-white">
                <Typography gutterBottom variant="h5" component="div">
                The Batman
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                6 April 2022, 14:40
                </Typography>
                <Typography variant="body2" className="text-muted w-full" style={{ overflowWrap: 'break-word', wordBreak: 'break-all' }}>
                  An absolutely excellent, masterful final lap for the series with Reeves dedicating.., aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaâ
                </Typography>


            </CardContent>
        </Grid>
        <Grid xs={2} className='h-full flex items-center justify-center'>
            <Typography gutterBottom variant="h4" component="div" className='text-primary'>
                75%
            </Typography>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CardReview