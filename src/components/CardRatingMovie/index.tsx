import { Box, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

interface RatingMovie {
  title?: string;
  image?: string;
  releaseDate?: string;
  description?: string;
  rating?: number;
}

interface CardRatingMovieProps {
  ratingMovie: RatingMovie;
}

const CardRatingMovie = ({ ratingMovie }: CardRatingMovieProps) => {
  const {title, image, releaseDate, description, rating} = ratingMovie
  return (
    <Card className='w-full h-[200px] mb-8 bg-[#1F293D]'>
      <Grid container spacing={2} className="flex h-full w-full m-0">
        <Grid xs={10} className="flex">
            <CardMedia
                component="img"
                alt="green iguana"
                style={{ width: "140px", height: "100%", objectFit: "cover", padding:"8px",  borderRadius: "10px" }}
                image={image}
                />
            <CardContent className="text-white">
                <Typography gutterBottom variant="h5" component="div">
                  {title}
                </Typography>
                <Typography gutterBottom variant="body1" component="div">
                {releaseDate}
                </Typography>
                <Typography variant="body2" className="text-muted w-full" style={{ overflowWrap: 'break-word', wordBreak: 'break-all' }}>
                  {description}
                </Typography>


            </CardContent>
        </Grid>
        <Grid xs={2} className='h-full flex items-center justify-center'>
            <Typography gutterBottom variant="h4" component="div" className='text-primary'>
              {rating && rating * 10} %
            </Typography>
        </Grid>
      </Grid>
    </Card>
  )
}

export default CardRatingMovie