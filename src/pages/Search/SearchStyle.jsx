import styled from "styled-components";
export const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .search-form {
    display: flex;
  }
`;

export const SearchInput = styled.div`
  input[type="text"] {
    width: 75%;
    height: 40px;
    padding: 0 50px;
    outline: none;
    border: none;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
  }
  input[type="text"]:focus {
    width: 80%;
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  }
`;

export const SearchContainer = styled.div`
  min-height: 80vh;
  width: 100%;
  padding-top: 120px;
  padding-bottom: 50px;
  background: #f0eeee;
`;

export const SearchContent = styled.div`
  margin: 0 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (max-width: 900px) {
    margin: 0 10px;
  }
`;
