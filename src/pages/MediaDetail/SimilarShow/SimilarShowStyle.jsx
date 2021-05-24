import styled from "styled-components";

export const CardContainer = styled.div`
  width: 120px;
  margin: 10px;
  border-radius: 6px;
  background: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 846px) {
    width: 100px;
  }
  &:hover {
    transform: scale(1.05);
    /* border: 2px solid #cdd0d3; */
    box-shadow: 0px 1px 5px #1b3347;
  }
`;

export const CardImage = styled.img`
  padding: 5px;
  width: 100%;
  height: 130px;
  object-fit: cover;
  //color: #425f77;
`;

export const CardDescription = styled.div`
  border-radius: 6px;
  background: #f0f1f1;
`;

export const CardTitle = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 0.85em;
  color: #000;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  height: 15px;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
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
