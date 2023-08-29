"use client"

import CenteredTabs from '@/src/components/Tab'
import React from 'react'
import 'public/assets/css/globals.css'
import { Button, Box } from '@mui/material'
import ListMovie from '@/src/components/ListMovie';
import ListReview from '@/src/components/ListReview';
import Footer from '@/src/components/Footer';
import Header from '@/src/components/Header'
import Carousel from '@/src/components/CardSlider/Carousel'

const titleTabsCategories = ["All", "Latest", "Up coming", "Top rated"]
const titleTabsGenre = ["Action", "Horror", "Comedy"]

const movies = [
  {
      id: 1,
      img: '/assets/images/the_batman.jpg',
      title: 'The Batman',
      genre: 'Action, Adventure,...',
      rating: 8.1
  },
  {
      id: 2,
      img:'/assets/images/uncharted.jpg',
      title: 'Uncharted',
      genre: 'Adventure, Action,...',
      rating: 8.1
  },
  {
      id: 3,
      img: '/assets/images/The_Exorcism_of_God.jpg',
      title: 'The Exorcism of God',
      genre: 'Horror, Comedy',
      rating: 8.1
  },
  {
      id: 4,
      img: '/assets/images/Turning_Red.jpg',
      title: 'Turning Red',
      genre: 'Comedy, Cartoon',
      rating: 8.1
  },
  {
      id: 5,
      img: '/assets/images/the_batman.jpg',
      title: 'The Batman',
      genre: 'Action, Adventure,...',
      rating: 8.1
  },
  {
      id: 6,
      img:'/assets/images/uncharted.jpg',
      title: 'Uncharted',
      genre: 'Adventure, Action,...',
      rating: 8.1
  },
  {
      id: 7,
      img: '/assets/images/The_Exorcism_of_God.jpg',
      title: 'The Exorcism of God',
      genre: 'Horror, Comedy',
      rating: 8.1
  },
  {
      id: 8,
      img: '/assets/images/Turning_Red.jpg',
      title: 'Turning Red',
      genre: 'Comedy, Cartoon',
      rating: 8.1
  }
]

const HomePage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Header />
      <Carousel />
      <div className='bg-home'>
      <CenteredTabs
        name= "Currently premiering"
        titleTabs={titleTabsCategories}
        value={value}
        handleChange={handleChange}
      />
      <Box className="text-primary">
          <ListMovie movies={movies} />
      </Box>
      <CenteredTabs
        name= "Rating"
        titleTabs={titleTabsGenre}
        value={value}
        handleChange={handleChange}
      />
      <ListReview/>
      <Footer/>
    </div>
    </>
  )
}

export default HomePage