import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DetailContainer } from "./MediaDetailStyle";

const MediaDetail = () => {
  const { Id, mediaType } = useParams();
  const [detail, setDetail] = useState([]);
  const [video, setVideo] = useState();
  const [casting, setCasting] = useState([]);
  const [similarShow, setSimilarShow] = useState([]);

  const getDetail = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${Id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setDetail(data);
    console.log("Deatail:", data);
  };

  const getVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${Id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setVideo(data.results[0]?.key);
    console.log("Video: ", data.results[0]?.key);
  };

  const getCasting = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${Id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setCasting(data.cast);
    console.log("Casting : ", data.cast);
  };

  const getSimilarShow = async () => {
    const { data } = await axios.get(
      ` https://api.themoviedb.org/3/${mediaType}/${Id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );
    setSimilarShow(data.results);
    console.log("Similar:", data.results);
  };

  useEffect(() => {
    getDetail();
    getVideo();
    getCasting();
    getSimilarShow();
    // eslint-disable-next-line
  }, []);

  return <DetailContainer>Media</DetailContainer>;
};

export default MediaDetail;
