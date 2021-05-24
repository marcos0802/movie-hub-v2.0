import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "@material-ui/core/Button";
import YouTubeIcon from "@material-ui/icons/YouTube";
import {
  DetailContainer,
  MediaBackground,
  MediaDescription,
  SimilarShowContainer,
  Subtitle,
} from "./MediaDetailStyle";
import ScrollUpButton from "../../components/Button/ScrollUpButton";
import Carousel from "./CastingCarousel/Carousel";
import SimilarShow from "./SimilarShow/SimilarShow";

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
  };

  const getVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${Id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setVideo(data.results[0]?.key);
  };

  const getCasting = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${mediaType}/${Id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setCasting(data.cast);
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

  return (
    <DetailContainer>
      <ScrollUpButton onClick={() => window.scroll(0, 0)} />
      <MediaBackground
        bgr={`https://image.tmdb.org/t/p/original${detail.backdrop_path}`}
      >
        <MediaDescription>
          <div className="col left">
            <div className="image">
              <img
                src={`https://image.tmdb.org/t/p/original${detail.poster_path}`}
                alt=""
              />
              <Button
                variant="contained"
                startIcon={<YouTubeIcon />}
                color="secondary"
                target="__blank"
                href={`https://www.youtube.com/watch?v=${video}`}
                style={{ margin: "5px" }}
              >
                Watch the Trailer
              </Button>
            </div>
          </div>
          <div className="col right">
            <div>
              <h2>{detail.title || detail.name}</h2>
              <h3
                style={{ color: "white", fontSize: "20px", fontWeight: "600" }}
              >
                Tagline: {detail.tagline}
              </h3>
            </div>
            <div className="release_date">
              {detail.release_date || detail.first_air_date}
            </div>
            <div>
              <Subtitle>Overview</Subtitle>
              <p>{detail.overview}</p>
            </div>
            <div
              style={{ width: "50vw", height: "120px", marginBottom: "60px" }}
            >
              <Subtitle>Casting</Subtitle>
              <Carousel casting={casting} />
            </div>
          </div>
          <SimilarShowContainer>
            <h3 style={{ color: "white", fontSize: "32px", fontWeight: "700" }}>
              Similar {mediaType === "tv" ? "Tv Series" : "Movies"}
            </h3>
            <SimilarShow similarShow={similarShow} />
          </SimilarShowContainer>
        </MediaDescription>
      </MediaBackground>
    </DetailContainer>
  );
};

export default MediaDetail;
