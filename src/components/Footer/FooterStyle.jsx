import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 30px 50px;
  background: #1f242e;
  color: #fff;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const Copyright = styled.div`
  width: calc(25% - 20px);
  display: flex;
  flex-direction: column;
  font-size: 13px;
  @media screen and (max-width: 1000px) {
    width: calc(33% - 20px);
    margin-bottom: 10px;
  }
  @media screen and (max-width: 700px) {
    width: calc(50% - 20px);
  }
  @media screen and (max-width: 400px) {
    width: calc(100% - 20px);
  }
`;

export const ContactUs = styled.div`
  width: calc(25% - 20px);
  display: flex;
  flex-direction: column;
  font-size: 13px;
  @media screen and (max-width: 1000px) {
    width: calc(33% - 20px);
    margin-bottom: 10px;
  }
  @media screen and (max-width: 700px) {
    width: calc(50% - 20px);
  }
  @media screen and (max-width: 400px) {
    width: calc(100% - 20px);
  }
`;

export const FollowUs = styled.div`
  width: calc(25% - 20px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-size: 13px;
  &.social-media {
    display: flex;
    cursor: pointer;
  }
  @media screen and (max-width: 1000px) {
    width: calc(33% - 20px);
    margin-bottom: 10px;
  }
  @media screen and (max-width: 700px) {
    width: calc(50% - 20px);
  }
  @media screen and (max-width: 400px) {
    width: calc(100% - 20px);
  }
`;
export const Country = styled.div`
  width: calc(15% - 20px);
  display: flex;
  padding: 10px;
  margin-top: 10px;
  border: 2px solid white;
  border-radius: 4px;
  font-size: 13px;
  img {
    margin-right: 5px;
    width: 32px;
    height: 20px;
    object-fit: cover;
  }
  @media screen and (max-width: 1000px) {
    width: calc(33% - 20px);
  }
  @media screen and (max-width: 700px) {
    width: calc(50% - 20px);
  }
  @media screen and (max-width: 400px) {
    width: calc(100% - 20px);
  }
`;

export const Title = styled.h5`
  font-weight: 700;
  font-size: 17px;
  padding-bottom: 10px;
`;
