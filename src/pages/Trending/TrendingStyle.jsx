import styled from "styled-components";

export const TrendingContainer = styled.div`
  min-height: 70vh;
  width: 100%;
  padding-top: 90px;
  background: linear-gradient(
    0deg,
    rgba(14, 25, 48, 1) 11%,
    rgba(14, 25, 48, 0.7685324618128502) 45%,
    rgba(14, 25, 48, 0.2531262993478641) 95%
  );
`;

export const CarouselBackground = styled.div`
  background:linear-gradient(0deg, rgba(14, 25, 48, 1) 11%, rgba(14, 25, 48, 0.7685324618128502) 45%, rgba(14, 25, 48, 0.2531262993478641) 95%),
  url("${({ bgr }) => bgr}");
  background-size:cover;
  width:100%;
  height:90vh;
`;

export const TrendingInfo = styled.div`
  padding-top: 50vh;
  padding-left: 5vw;
  h2 {
    color: white;
    font-weight: 900;
    font-size: 3.5rem;
  }
  .detail-link {
    display: inline-block;
    outline: none;
    border: 2px solid white;
    color: white;
    border-radius: 4px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    text-decoration: none;
    background: steelblue;
    padding: 10px;
    font-size: 20px;
    &:hover {
      background: white !important;
      border-color: steelblue;
      color: black;
    }
  }
`;

export const TrendingContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;
  @media screen and (max-width: 900px) {
    margin: 0 10px;
  }
`;



export const Lasted = styled.div`
  padding: 20px 100px;
  width: 100%;
  align-self: flex-start;
`;
