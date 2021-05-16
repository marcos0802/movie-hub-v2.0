import React, { useState, useEffect } from "react";
import axios from "axios";
import ScrollUpButton from "../../components/Button/ScrollUpButton";
import { MoviesContainer, MoviesContent } from "./MoviesStyle";
import Genres from "../../components/Genres/Genres";
import useGenre from "../../hook/useGenre";
import Loading from "../../components/Loader/Loading";
import Card from "../../components/Card/Card";
import CustomPagination from "../../components/Pagination/CustomPagination";
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const genreforURL = useGenre(selectedGenres);
  const [isLoading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");

  const getMovies = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
      );
      setLoading(false);
      setMovies(data.results);
      setNumOfPages(data.total_pages);
    } catch (err) {
      setErrors(`${err}, the server is unreachable!`);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    getMovies();
    // eslint-disable-next-line
  }, [page, genreforURL]);

  return (
    <MoviesContainer>
      <ScrollUpButton onClick={() => window.scroll(0, 0)} />
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setPage}
      />
      {errors.length > 0 && <div>{errors}</div>}
      <div style={{ height: "20px" }}></div>
      <MoviesContent>
        {isLoading ? (
          <Loading />
        ) : (
          movies.map((movie, index) => (
            <Card
              key={index}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title || movie.name}
              date={movie.first_air_date || movie.release_date}
              media_type={movie.media_type}
              vote_average={movie.vote_average}
            />
          ))
        )}
      </MoviesContent>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </MoviesContainer>
  );
};

export default Movies;
