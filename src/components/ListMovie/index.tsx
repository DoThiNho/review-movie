import React from 'react'
import CardMovie from '../CardMovie'

const ListMovie = ({ movies }: any) => {
    return (
      <div className='flex justify-around'>
        {movies.map((movie: any) => (
          <CardMovie
            key={movie.id} 
            linkImg={movie.img}
            title={movie.title}
            genre={movie.genre}
            rating={movie.rating}
          />
        ))}
      </div>
    );
  };

export default ListMovie