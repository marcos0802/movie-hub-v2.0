import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  CarouselBackground,
  Lasted,
  TrendingContainer,
  TrendingInfo,
} from "./TrendingStyle";
import ScrollUpButton from "../../components/Button/ScrollUpButton";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Popular from "./Popular/Popular";

const Trending = () => {
  const [trendings, setTrendings] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);

  const getTrendings = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=1`
      );
      setTrendings(data.results);
    } catch (err) {}
  };

  const getPopularMovies = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setPopularMovies(data.results);
    } catch (err) {}
  };

  const getPopularSeries = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setPopularSeries(data.results);
    } catch (err) {}
  };

  useEffect(() => {
    getTrendings();
    getPopularMovies();
    getPopularSeries();
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
        duration={10000}
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
                <h3>{trending.release_date || trending.first_air_date}</h3>
                <Link
                  to={`/detail/${trending.id}&${trending.media_type}`}
                  className="detail-link"
                >
                  More Information
                </Link>
              </TrendingInfo>
            </CarouselBackground>
          );
        })}
      </Slide>

      <Lasted>
        <h3>Popular Movies</h3>
        <div>
          <Popular popular={popularMovies} mediaType={"movie"} />
        </div>
        <h3>Popular Tv Series</h3>
        <div>
          <Popular popular={popularSeries} mediaType={"tv"} />
        </div>
      </Lasted>
    </TrendingContainer>
  );
};

export default Trending;
