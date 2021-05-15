import React from "react";
import styled from "styled-components";

const Title = styled.div`
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  font-size: 2rem;
  font-weight: 600;
  padding: 0 30px;
  background: crimson;
  color: white;
  position: fixed;
  z-index: 1;
  cursor: pointer;
  @media screen and (max-width: 846px) {
    position: absolute;
  }
`;

const Subtitle = styled.div`
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 0 20px;
  background: crimson;
  color: white;
  position: relative;
  cursor: pointer;
`;

const PageTitle = ({ text, onClick }) => {
  return <Title onClick={onClick}>{text}</Title>;
};

export const PageSubtitle = ({ text }) => {
  return <Subtitle>{text}</Subtitle>;
};

export default PageTitle;
