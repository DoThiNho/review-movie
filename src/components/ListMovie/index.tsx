import React from 'react'
import CardMovie from '../CardMovie'
import { Button, Grid } from '@mui/material';

const ListMovie = ({ movies }: any) => {
    return (
      <Grid container spacing={2} className='px-12 mt-4'>
        {movies?.map((movie: any) => (
          <Grid item xs={6} sm={4} md={3} lg={3} key={movie.id} className='flex justify-center'>
            <CardMovie
            linkImg={movie.img}
            title={movie.title}
            genre={movie.genre}
            rating={movie.rating}
          />
          </Grid>
        ))}
        <Button 
            variant="contained" 
            fullWidth
            className='bg-primary hover:bg-primary mt-6 lg:mx-12 mb-10'  
            size='large'
          >View all movies</Button>
      </Grid>
    );
  };

export default ListMovie