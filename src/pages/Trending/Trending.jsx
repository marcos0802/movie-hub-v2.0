import React, { useState, useEffect } from "react";
import axios from "axios";
import { CarouselBackground, TrendingContainer } from "./TrendingStyle";
import ScrollUpButton from "../../components/Button/ScrollUpButton";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const Trending = () => {
  const [trendings, setTrendings] = useState([]);
  const getTrendings = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=1`
      );
      setTrendings(data.results);
    } catch (err) {}
  };

  useEffect(() => {
    getTrendings();
    // eslint-disable-next-line
  }, []);

  return (
    <TrendingContainer>
      <ScrollUpButton onClick={() => window.scroll(0, 0)} />
      <Slide
        easing="ease"
        arrows={false}
        autoPlay
        pauseOnHover={false}
        duration={1000}
      >
        {trendings.map((trending, index) => {
          return (
            <CarouselBackground
              key={index}
              className="each-slide"
              bgr={`https://image.tmdb.org/t/p/original${trending.backdrop_path}`}
            ></CarouselBackground>
          );
        })}
      </Slide>
    </TrendingContainer>
  );
};

export default Trending;
