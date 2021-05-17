import styled from "styled-components";

export const SeriesContainer = styled.div`
  min-height: 80vh;
  width: 100%;
  padding-top: 120px;
  padding-bottom: 50px;
  background: #f0eeee;
`;

export const SeriesContent = styled.div`
  margin: 0 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (max-width: 1000px) {
    margin: 0 10px;
  }
`;
