import {
  Button,
  createMuiTheme,
  Tab,
  Tabs,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomPagination from "../../components/Pagination/CustomPagination";
import Card from "../../components/Card/Card";
import {
  EmptyResult,
  SearchBox,
  SearchContainer,
  SearchContent,
} from "./SearchStyle";
import ScrollUpButton from "../../components/Button/ScrollUpButton";

const Search = () => {
  const [mediaType, setMediaType] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [numOfPages, setNumOfPages] = useState();

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${
          mediaType ? "tv" : "movie"
        }?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setSearchResults(data.results);
      console.log(data.results);
      setNumOfPages(data.total_pages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line
  }, [mediaType, page]);

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fcf8f8",
      },
    },
  });

  return (
    <SearchContainer>
      <ScrollUpButton onClick={() => window.scroll(0, 0)} />
      <ThemeProvider theme={darkTheme}>
        <SearchBox>
          <TextField
            style={{ flex: 1 }}
            className="searchBox"
            label="Search here"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            onClick={fetchSearch}
            variant="contained"
            style={{ marginLeft: 10 }}
          >
            <SearchIcon fontSize="large" />
          </Button>
        </SearchBox>
        <div className="search-form">
          <Tabs
            value={mediaType}
            indicatorColor="primary"
            textColor="primary"
            onChange={(event, newValue) => {
              setMediaType(newValue);
              setPage(1);
            }}
            style={{ paddingBottom: 5 }}
            aria-label="disabled tabs example"
          >
            <Tab
              style={{ width: "50%", fontWeight: "600" }}
              label="Search Movies"
            />
            <Tab
              style={{ width: "50%", fontWeight: "600" }}
              label="Search TV Series"
            />
          </Tabs>
        </div>
      </ThemeProvider>
      <SearchContent>
        {searchResults.map((result, index) => (
          <Card
            key={index}
            id={result.id}
            poster={result.poster_path}
            title={result.title || result.name}
            date={result.first_air_date || result.release_date}
            media_type={mediaType ? "tv" : "movie"}
            vote_average={result.vote_average}
          />
        ))}
      </SearchContent>

      {searchText.length > 1 &&
        searchResults.length < 1 &&
        (mediaType ? (
          <EmptyResult>No Series Found</EmptyResult>
        ) : (
          <EmptyResult>No Movies Found</EmptyResult>
        ))}

      {numOfPages > 1 && (
        <CustomPagination setPage={setPage} numOfPages={numOfPages} />
      )}
    </SearchContainer>
  );
};

export default Search;
