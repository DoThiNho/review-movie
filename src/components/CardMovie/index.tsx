import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface CardMovieProps {
    linkImg : string,
    title: string,
    genre: string,
    rating? : Number
}

const CardMovie = ({
    linkImg,
    title,
    genre,
    rating
}: CardMovieProps) => {
  return (
    <Card sx={{ width: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={linkImg}
          alt={title}
          sx={{ height: 360 }}
        />
        <CardContent className='bg-home px-0'>
          <Typography gutterBottom variant="h5" component="div" className='text-white'>
            {title}
          </Typography>
          <Typography variant="body2" className='text-muted'>
            {genre}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardMovie