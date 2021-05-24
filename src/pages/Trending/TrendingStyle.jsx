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
