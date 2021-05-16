import React, { useState, useEffect } from "react";
import axios from "axios";
import { TrendingContainer, TrendingContent } from "./TrendingStyle";
import Loading from "../../components/Loader/Loading";
import Card from "../../components/Card/Card";
import CustomPagination from "../../components/Pagination/CustomPagination";
import ScrollUpButton from "../../components/Button/ScrollUpButton";

const Trending = () => {
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [trendings, setTrendings] = useState([]);
  const [errors, setErrors] = useState("");
  const getTrendings = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
      );
      setLoading(false);
      setTrendings(data.results);
      console.log(data.results);
    } catch (err) {
      setErrors(`${err}, the server is unreachable!`);
    }
  };

  useEffect(() => {
    getTrendings();
    // eslint-disable-next-line
  }, [page]);
  return (
    <TrendingContainer>
      <ScrollUpButton onClick={() => window.scroll(0, 0)} />
      {errors.length > 0 && <div>{errors}</div>}
      <div style={{ height: "20px" }}></div>
      <TrendingContent>
        {isLoading ? (
          <Loading />
        ) : (
          trendings.map((trending, index) => (
            <Card
              key={index}
              id={trending.id}
              poster={trending.poster_path}
              title={trending.title || trending.name}
              date={trending.first_air_date || trending.release_date}
              media_type={trending.media_type}
              vote_average={trending.vote_average}
            />
          ))
        )}
      </TrendingContent>
      {trendings.length > 0 && <CustomPagination setPage={setPage} />}
    </TrendingContainer>
  );
};

export default Trending;
