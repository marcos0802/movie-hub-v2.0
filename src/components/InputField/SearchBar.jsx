import React from "react";
import styled from "styled-components";

const SearchBox = styled.div`
  input[type="text"] {
    width: 200px;
    height: 40px;
    padding: 0 50px;
    outline: none;
    border: none;
    border-radius: 30px;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
  }
  input[type="text"]:focus {
    width: 250px;
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  }
`;
export default function SearchAppBar({ onChange }) {
  return (
    <SearchBox>
      <input
        type="text"
        name="search"
        placeholder="Search.."
        onChange={onChange}
      />
    </SearchBox>
  );
}
