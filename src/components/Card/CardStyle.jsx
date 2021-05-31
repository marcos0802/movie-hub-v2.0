import styled from "styled-components";

export const CardContainer = styled.div`
  width: calc(14.5%);
  margin: 5px;
  border-radius: 6px;
  background: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 1366px) {
    width: calc(17.5%);
  }
  @media screen and (max-width: 1118px) {
    width: calc(20%);
  }
  @media screen and (max-width: 948px) {
    width: calc(22.5%);
  }
  @media screen and (max-width: 830px) {
    width: calc(25%);
  }
  @media screen and (max-width: 750px) {
    width: calc(27.5%);
  }

  @media screen and (max-width: 670px) {
    width: calc(30%);
  }
  @media screen and (max-width: 617px) {
    width: calc(32.5%);
  }
  @media screen and (max-width: 547px) {
    width: calc(42.5%);
  }
  @media screen and (max-width: 420px) {
    width: calc(45%);
  }
  @media screen and (max-width: 370px) {
    width: calc(60%);
  }
  &:hover {
    transform: scale(1.05);
    /* border: 2px solid #cdd0d3; */
    box-shadow: 0px 1px 5px #1b3347;
  }
  .link {
    text-decoration: none;
  }
`;

export const CardImage = styled.img`
  padding: 5px;
  width: 100%;
  height: 240px;
  object-fit: cover;
  //color: #425f77;
`;

export const CardDescription = styled.div`
  border-radius: 6px;
  background: #f0f1f1;
`;

export const CardTitle = styled.div`
  font-weight: 900;
  text-align: center;
  font-size: 0.85em;
  color: #000;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  height: 20px;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #9fb5c7;
  font-size: 12px;
  font-weight: 600;
  color: #022f53;
  .vote {
    background-color: #1b364d;
    color: #fff;
    border-radius: 6px;
    padding-right: 2px;
    padding-left: 2px;
  }
`;
