import React, { useState, useEffect } from "react";
import axios from "axios";
import ScrollUpButton from "../../components/Button/ScrollUpButton";
import Genres from "../../components/Genres/Genres";
import useGenre from "../../hook/useGenre";
import Loading from "../../components/Loader/Loading";
import Card from "../../components/Card/Card";
import CustomPagination from "../../components/Pagination/CustomPagination";
import { SeriesContainer, SeriesContent } from "./SeriesStyle";

const Series = () => {
  const [series, setSeries] = useState([]);
  const [page, setPage] = useState(1);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const genreforURL = useGenre(selectedGenres);
  const [isLoading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");

  const getSeries = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
      );
      setLoading(false);
      setSeries(data.results);
      setNumOfPages(data.total_pages);
    } catch (err) {
      setErrors(`${err}, the server is unreachable!`);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    getSeries();
    // eslint-disable-next-line
  }, [page, genreforURL]);

  return (
    <SeriesContainer>
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
      <SeriesContent>
        {isLoading ? (
          <Loading />
        ) : (
          series.map((serie, index) => (
            <Card
              key={index}
              id={serie.id}
              poster={serie.poster_path}
              title={serie.title || serie.name}
              date={serie.first_air_date || serie.release_date}
              media_type="tv"
              vote_average={serie.vote_average}
            />
          ))
        )}
      </SeriesContent>
      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </SeriesContainer>
  );
};

export default Series;
