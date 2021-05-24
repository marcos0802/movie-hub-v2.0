import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  CarouselBackground,
  TrendingContainer,
  TrendingInfo,
} from "./TrendingStyle";
import ScrollUpButton from "../../components/Button/ScrollUpButton";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";

const Trending = () => {
  const [trendings, setTrendings] = useState([]);

  const getTrendings = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=1`
      );
      setTrendings(data.results);
      console.log(data.results);
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
            >
              <TrendingInfo>
                <h2>{trending.name || trending.title}</h2>
                <Button
                  label="More Info"
                  background="steelblue"
                  padding="10px"
                  fontSize="1rem"
                />
              </TrendingInfo>
            </CarouselBackground>
          );
        })}
      </Slide>
      <div style={{display:'flex'}}>
        {trendings.map((trending,index)=>(
          <Card
           key={index}
              id={trending.id}
              poster={trending.poster_path}
              title={trending.title || trending.name}
              date={trending.first_air_date || trending.release_date}
              media_type={trending.media_type}
              vote_average={trending.vote_average}
          />
        ))}
      </div>
    </TrendingContainer>
  );
};

export default Trending;
