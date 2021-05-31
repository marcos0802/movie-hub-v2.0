import styled from "styled-components";

export const DetailContainer = styled.div`
  min-height: 80vh;
  width: 100%;
  padding-top: 90px;
`;

export const MediaBackground = styled.div`
  background:linear-gradient(0deg, rgba(14, 25, 48, 1) 11%, rgba(14, 25, 48, 0.7685324618128502) 45%, rgba(14, 25, 48, 0.2531262993478641) 95%),
  url("${({ bgr }) => bgr}");
  background-size:cover;
  width:100%;
`;

export const MediaDescription = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  .col {
    margin: 20px;
    @media screen and (max-width: 900px) {
      margin: 10px;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    width: 50vw;
    .release_date {
      align-self: flex-end;
      background: #f80456;
      position: relative;
      width: 300px;
      padding: 5px;
      margin-bottom: 20px;
      border-bottom-left-radius: 50px;
      border-top-left-radius: 50px;
      font-size: 25px;
      text-align: center;
      color: white;
      font-weight: 700;
      @media screen and (max-width: 900px) {
        font-size: 20px;
        width: 200px;
      }
    }
  }
  .image {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 2px solid #cbe0f3;
    border-radius: 6px;
    background: none;
    img {
      width: 330px;
      object-fit: cover;
      @media screen and (max-width: 900px) {
        width: 300px;
      }
    }
  }
  h2 {
    color: white;
    font-weight: 900;
    font-size: 70px;
    @media screen and (max-width: 900px) {
      font-size: 45px;
    }
  }

  p {
    padding: 20px;
    color: #e9e1e1;
    font-size: 20px;
    font-weight: 700;
    @media screen and (max-width: 900px) {
      font-size: 16px;
      padding: 2px;
    }
  }
  @media screen and (max-width: 900px) {
    margin: 0 10px;
  }
`;

export const Subtitle = styled.h3`
  font-weight: 700;
  font-size: 23px;
  color: white;
  @media screen and (max-width: 900px) {
    font-size: 20px;
  }
`;

export const SimilarShowContainer = styled.div`
  width: 75%;
  align-self: center;
  margin-bottom: 50px;
`;
