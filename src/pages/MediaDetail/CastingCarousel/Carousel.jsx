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
      items: 1,
    },
    512: {
      items: 3,
    },
    712: {
      items: 4,
    },
    1024: {
      items: 6,
    },
  };

  return (
    <AliceCarousel
      mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      animationDuration="5000"
      responsive={responsive}
      items={cast}
      autoPlay
    />
  );
};

export default Carousel;
