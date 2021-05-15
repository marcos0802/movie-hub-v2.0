import React from "react";
import HowToVoteIcon from "@material-ui/icons/HowToVote";
import { img_300, unavailable } from "../../config/config";
import { CardTitle, CardFooter, CardContainer } from "./CardStyle";
const Card = ({ id, poster, title, date, media_type, vote_average }) => {
  return (
    <CardContainer
      style={{
        background: `url(${poster ? `${img_300}${poster}` : unavailable})`,
        backgroundSize: "cover",
      }}
    >
      <div className="info-hidden">
        <CardTitle>{title}</CardTitle>
        <CardFooter>
          <span>{media_type === "tv" ? "TV Series" : "Movie"}</span>
          <span>{date}</span>
          <span className="vote">
            <HowToVoteIcon style={{ fontSize: "13px" }} /> {vote_average}
          </span>
        </CardFooter>
      </div>
    </CardContainer>
  );
};

export default Card;
