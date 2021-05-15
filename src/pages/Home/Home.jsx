import React from "react";
import Button from "../../components/Button/Button";
import { HomeContainer, HomeSubscription, HomeTitle } from "./HomeStyle";

const Home = () => {
  return (
    <HomeContainer>
      <HomeTitle>
        <h1>ONLINE MOVIES, TV SHOW & MORE.</h1>
        <h2>For any taste, at anytime and on any device!</h2>
      </HomeTitle>
      <HomeSubscription>
        <h3>
          Ready to join? Click on the join now button to create or restart your
          membership.
        </h3>
        <Button
          label="Join Now"
          background="steelblue"
          padding="15px"
          fontSize="1.2rem"
        />
      </HomeSubscription>
    </HomeContainer>
  );
};

export default Home;
