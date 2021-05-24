import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { img_300, noPicture } from "../../../config/config";
import { CarouselContainer } from "./CarouselStyle";

const handleDragStart = (e) => e.preventDefault();

const Carousel = ({ casting }) => {
  const cast = casting.map((actor) => (
    <CarouselContainer>
      <img
        src={
          actor.profile_path ? `${img_300}/${actor.profile_path}` : noPicture
        }
        alt={actor?.name}
        onDragStart={handleDragStart}
        className="carousel-img"
      />
      <h6 className="carousel-actor">{actor?.name}</h6>
    </CarouselContainer>
  ));

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    }
  };

  return (
    <AliceCarousel
      mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={cast}
      autoPlay
    />
  );
};

export default Carousel;
