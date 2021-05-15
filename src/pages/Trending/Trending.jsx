import React, { useState, useEffect } from "react";
import axios from "axios";
import PageTitle from "../../shared/PageTitle";
import { TrendingContainer, TrendingContent } from "./TrendingStyle";
import Loading from "../../components/Loader/Loading";

const Trending = () => {
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [trending, setTrending] = useState([20, 30, 4564, 7884, 9948]);

  const getTrending = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
      );
      setLoading(false);
      setTrending(data.results);
    } catch (err) {}
  };

  useEffect(() => {
    getTrending();
    // eslint-disable-next-line
  }, [page]);
  return (
    <TrendingContainer>
      <PageTitle
        text="TODAY TRENDING"
        onClick={() => {
          window.scroll(0, 0);
        }}
      />
      <div style={{ height: "50px" }}></div>
      <TrendingContent>
        <Loading />
      </TrendingContent>
    </TrendingContainer>
  );
};

export default Trending;
