import styled from "styled-components";

export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 10vw;
`;

export const SearchContainer = styled.div`
  min-height: 80vh;
  width: 100%;
  padding-top: 100px;
  padding-bottom: 50px;
  background: linear-gradient(
    0deg,
    rgba(14, 25, 48, 1) 11%,
    rgba(14, 25, 48, 0.7685324618128502) 45%,
    rgba(14, 25, 48, 0.5) 95%
  );
  .search-form {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SearchContent = styled.div`
  margin: 0 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (max-width: 900px) {
    margin: 0 10px;
  }
`;

export const EmptyResult = styled.div`
  color: white;
  text-align: center;
  padding: 40px;
  font-size: 25px;
  font-weight: 700;
`;
