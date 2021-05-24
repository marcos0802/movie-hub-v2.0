import styled from "styled-components";

export const MoviesContainer = styled.div`
  min-height: 80vh;
  width: 100%;
  padding-top: 120px;
  padding-bottom: 50px;
  background: linear-gradient(
    0deg,
    rgba(14, 25, 48, 1) 5%,
    rgba(14, 25, 48, 0.7685324618128502) 60%,
    rgba(14, 25, 48, 0.5) 95%
  );
`;

export const MoviesContent = styled.div`
  margin: 0 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (max-width: 900px) {
    margin: 0 10px;
  }
`;
