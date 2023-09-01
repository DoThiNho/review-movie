"use client"

import TabsContainer from '@/src/components/TabsContainer'
import React from 'react'
import 'public/assets/css/globals.css'
import { Button, Box } from '@mui/material'
import ListMovie from '@/src/components/ListMovie';
import ListRatingMovie from '@/src/components/ListRatingMovie';
import Footer from '@/src/components/Footer';
import Header from '@/src/components/Header'
import Carousel from '@/src/components/CardSlider/Carousel'
import movies from '../../helper/movie.json';
import rating from '../../helper/rating.json';


const dataTabMovie = [
  {
    label: "All",
    component: <ListMovie movies={movies} />
  },
  {
    label: "Latest",
    component: <ListMovie movies={movies} />
  },
  {
    label: "Up Coming",
    component: <ListMovie movies={movies} />
  },
  {
    label: "Top rated",
    component: <ListMovie movies={movies} />
  }
]

const dataTabRating = [
  {
    label: "ACTION",
    component: <ListRatingMovie ratingMovies={rating} />
  },
  {
    label: "horror",
    component: <ListRatingMovie ratingMovies={rating} />
  },
  {
    label: "comedy",
    component: <ListRatingMovie ratingMovies={rating} />
  },
]

const HomePage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <div className='bg-home'>
        <TabsContainer title="Currently premiering" categories={dataTabMovie} />
        <TabsContainer title="Rating" categories={dataTabRating} />
        <Footer/>
      </div>
    </>
  )
}

export default HomePage