import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import LocalMoviesRoundedIcon from "@material-ui/icons/LocalMoviesRounded";
import { Nav, MenuBar, NavLink, NavMenu } from "./HeaderStyle";
import SearchAppBar from "../InputField/SearchBar";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  const closeMobileMenu = () => setShowMenu(false);
  return (
    <Nav>
      <NavLink
        to="/"
        onClick={() => {
          closeMobileMenu();
          window.scroll(0, 0);
        }}
        className="logo"
      >
        <h1>
          {" "}
          <LocalMoviesRoundedIcon style={{ fontSize: "50px" }} />
          <span>HUB</span>
        </h1>
      </NavLink>
      <div></div>
      <div></div>
      <MenuBar onClick={handleClick}>
        {showMenu ? (
          <CloseIcon style={{ color: "#fff", fontSize: "2rem" }} />
        ) : (
          <MenuIcon style={{ color: "#fff", fontSize: "2rem" }} />
        )}
      </MenuBar>
      <NavMenu className={showMenu ? "nav-menu active" : "nav-menu"}>
        <NavLink
          to="/trending"
          onClick={() => {
            window.scroll(0, 0);
            closeMobileMenu();
          }}
        >
          <h4>Trending</h4>
        </NavLink>
        <NavLink
          to="/movies"
          onClick={() => {
            window.scroll(0, 0);
            closeMobileMenu();
          }}
        >
          <h4>Movies</h4>
        </NavLink>
        <NavLink
          to="/series"
          onClick={() => {
            window.scroll(0, 0);
            closeMobileMenu();
          }}
        >
          <h4> Series</h4>
        </NavLink>
        <NavLink
          to="/search"
          onClick={() => {
            window.scroll(0, 0);
            closeMobileMenu();
          }}
        >
          <h4>Search</h4>
        </NavLink>
      </NavMenu>
    </Nav>
  );
};

export default Header;
