import React from "react";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import styled from "styled-components";

const ScrollUp = styled.div`
  position: fixed;
  width: 42px;
  height: 45px;
  background: #fb0456;
  right: 30px;
  text-align: center;
  line-height: 45px;
  color: #fff;
  z-index: 9999;
  font-size: 30px;
  border-radius: 6px;
  cursor: pointer;
  bottom: 30px;
  opacity: 1;
  pointer-events: auto;
`;

const ScrollUpButton = ({ onClick }) => {
  return (
    <ScrollUp onClick={onClick}>
      <ArrowUpward />
    </ScrollUp>
  );
};

export default ScrollUpButton;
