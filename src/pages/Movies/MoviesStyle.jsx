import styled from "styled-components";

export const MoviesContainer = styled.div`
  min-height: 80vh;
  width: 100%;
  padding-left: 50px;
  padding-top: 120px;
  padding-bottom: 50px;
  background: #f0eeee;
`;

export const MoviesContent = styled.div`
  margin: 0 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (max-width: 900px) {
    margin: 0 10px;
  }
`;
