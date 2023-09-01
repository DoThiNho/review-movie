import React from 'react'
import CardRatingMovie from '../CardRatingMovie'

const ListRatingMovie = ({ratingMovies} : any) => {
  console.log(ratingMovies)
  return (
    <div>
      {ratingMovies?.map((ratingMovie: any, index: number) => (
          <CardRatingMovie key={index} ratingMovie={ratingMovie}/>
        ))}
    </div>
  );
}

export default ListRatingMovie