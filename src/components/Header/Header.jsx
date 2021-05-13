import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import LocalMoviesRoundedIcon from "@material-ui/icons/LocalMoviesRounded";
import {
  Nav,
  MenuBar,
  NavBtn,
  NavBtnLink,
  NavLink,
  NavMenu,
} from "./HeaderStyle";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };
  const closeMobileMenu = () => setShowMenu(false);
  return (
    <Nav>
      <NavLink to="/" onClick={closeMobileMenu} className="logo">
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
        <NavLink to="/trending" activeStyle onClick={closeMobileMenu}>
          <h1>Trending</h1>
        </NavLink>
        <NavLink to="/movies" activeStyle onClick={closeMobileMenu}>
          <h1>Movies</h1>
        </NavLink>
        <NavLink to="/series" activeStyle onClick={closeMobileMenu}>
          <h1>Series</h1>
        </NavLink>
        <NavLink to="/search" activeStyle onClick={closeMobileMenu}>
          <h1>Search</h1>
        </NavLink>
        <NavLink to="/about" activeStyle onClick={closeMobileMenu}>
          <h1>About</h1>
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/sign-in" activeStyle onClick={closeMobileMenu}>
          Sign In
        </NavBtnLink>
      </NavBtn>
    </Nav>
  );
};

export default Header;
