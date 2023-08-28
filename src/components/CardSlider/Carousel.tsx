"use client"

import Slider from "react-slick";
import { useState, useEffect, useRef } from 'react';
import "./slick.css";
import "./slick-theme.css";
import data from '../../helper/slider.json';
import MovieCard from './Item';
import { Icon } from "@iconify/react";

const SlickArrowLeft = ({ ...props }) => (
  <Icon icon="fluent:triangle-left-12-filled" fontSize='1.5rem' className="slick-prev" {...props} />
);

const SlickArrowRight = ({ ...props }) => (
  <Icon icon="fluent:triangle-right-12-filled" fontSize='1.5rem' className="slick-next" {...props} />
);

const Carousel = ({ initialSlide = 0 }) => {

  const [hasSetPosition, setHasSetPosition] = useState(false);
  const slider = useRef() as any;

  useEffect(() => {
    if (slider.current && !hasSetPosition) {
      slider.current.slickGoTo(initialSlide);
      setHasSetPosition(true);
    }
  }, [initialSlide, hasSetPosition, slider]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  };

  return (
    <Slider ref={slider} {...settings} className="bg-sliderBg h-[700px] bg-[#1f293db3]" >
      {data.map((movie) => <MovieCard movie={movie}/>)}
    </Slider>
  )
}

export default Carousel