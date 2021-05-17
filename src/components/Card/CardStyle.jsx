import styled from "styled-components";

export const CardContainer = styled.div`
  width: 200px;
  margin: 5px;
  border: 2px solid #cdd0d3;
  box-shadow: 0px 1px 5px #1b3347;
  border-radius: 6px;
  background: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 846px) {
    width: 175px;
  }

  &:hover {
    transform: scale(1.05);
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
  background: linear-gradient(to bottom, #bdcde4, #425f77);
`;

export const CardTitle = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 1.2em;
  color: #fff;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  height: 20px;
  & {
    font-size: 0.85em;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 20px;
  font-size: 12px;
  font-weight: 500;
  color: white;
  .vote {
    background-color: crimson;
    border-radius: 6px;
    padding-right: 2px;
    padding-left: 2px;
  }
`;
