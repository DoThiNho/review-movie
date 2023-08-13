import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea } from '@mui/material';

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
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <Card 
      sx={{ width: 250 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}  
    >
      <CardActionArea>
        <Box className="relative">
          <CardMedia
            component="img"
            image={linkImg}
            alt={title}
            sx={{ height: 360 }}
          />
          <Box className="absolute top-0 right-0 bg-primary flex justify-center items-center px-4 m-2 rounded text-white">
              <Typography  variant="body1">
                {rating?.toString()}
              </Typography>
          </Box>
          {isHovered && (
            <div
              className="absolute top-0 w-full h-full bg-[#CCCCCC] bg-opacity-60 flex justify-center items-center"
            >
              <Button variant="contained" color="warning" className='bg-primary'>
                Read More
              </Button>
            </div>
          )}
        </Box>
        <CardContent className='bg-home px-0'>
          <Typography gutterBottom variant="h6" component="div" className='text-white'>
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