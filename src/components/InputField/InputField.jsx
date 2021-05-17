import React from "react";
import styled from "styled-components";

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 1.12rem;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  &:focus {
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  }
`;
const InputField = ({ type, placeholder, padding, value, onChange }) => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      style={{ padding: `${padding}`, width: "75%" }}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;
