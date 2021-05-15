import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  outline: none;
  border: 2px solid white;
  color: white;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background: white !important;
    border-color: steelblue;
    color: black;
  }
`;

const Button = ({ label, background, padding, fontSize }) => {
  return (
    <Btn
      style={{
        background: `${background}`,
        padding: `${padding}`,
        fontSize: `${fontSize}`,
      }}
    >
      {label}
    </Btn>
  );
};

export default Button;
