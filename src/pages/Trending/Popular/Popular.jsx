import React from "react";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HowToVoteIcon from "@material-ui/icons/HowToVote";
import { CardDescription, CardTitle } from "../../../components/Card/CardStyle";
import { img_300, unavailable } from "../../../config/config";
import { CardContainer, CardFooter, CardImage } from "./PopularStyle";

const handleDragStart = (e) => e.preventDefault();

const Popular = ({ popular,mediaType }) => {
  const items = popular.map((media) => (
    <CardContainer>
      <Link to={`/detail/${media.id}&${mediaType}`} className="link">
        <CardDescription>
          <CardImage
            src={
              media.poster_path ? `${img_300}${media.poster_path}` : unavailable
            }
            onDragStart={handleDragStart}
            alt={media.title || media.name}
          />
          <CardTitle>{media.title || media.name}</CardTitle>
          <CardFooter>
            <span>{media.release_date || media.first_air_date}</span>
            <span className="vote">
              <HowToVoteIcon style={{ fontSize: "10px" }} />{" "}
              {media.vote_average}
            </span>
          </CardFooter>
        </CardDescription>
      </Link>
    </CardContainer>
  ));

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 6,
    },
    1024: {
      items: 7,
    },
  };

  return (
    <AliceCarousel
      mouseTracking
      infinite
      // disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
      autoPlay
    />
  );
};

export default Popular;
