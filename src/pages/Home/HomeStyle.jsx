import styled from "styled-components";
import Banner from "../../assets/bannermovie.jpg";

export const HomeContainer = styled.div`
  min-height: 90vh;
  width: 100%;
  padding: 130px 50px;
  background: url(${Banner}) no-repeat;
  background-size: cover;
`;

export const HomeTitle = styled.div`
  margin-top: 20vh;
  color: #fff;
  h1 {
    font-size: 3.125rem;
    text-align: center;
  }
  h2 {
    font-size: 2.125rem;
    text-align: center;
    font-weight: 400;
  }
  @media screen and (max-width: 969px) {
    h1 {
      font-size: 2.25rem;
    }
    h2 {
      font-size: 1.75rem;
    }
  }
  @media screen and (max-width: 730px) {
    margin-top: 15vh;
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.4rem;
    }
  }
`;

export const HomeSubscription = styled.div`
  margin-top: 5vh;
  color: #fff;
  text-align: center;
  h3 {
    font-weight: 600;
    margin-bottom: 15px;
  }
`;
