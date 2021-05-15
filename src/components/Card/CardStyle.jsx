import styled from "styled-components";

export const CardContainer = styled.div`
  width: 220px;
  margin: 10px;
  padding: 5px;
  height: 300px;
  box-shadow: 0px 1px 5px #ebf3fa;
  border-radius: 6px;
  background: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  @media screen and (max-width: 846px) {
    width: 200px;
  }

  &:hover {
    transform: scale(1.05);
    border: 2px solid steelblue;
    .info-hidden {
      padding-top: 20px;
      display: block;
      opacity: 1;
      background: linear-gradient(to bottom, steelblue, darkblue);
    }
  }
  .info-hidden {
    display: none;
    opacity: 0;
    margin-top: 90%;
  }
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
