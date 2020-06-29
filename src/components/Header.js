import React from "react";
import NavBar from "./NavBar";
import Search from "./Search";
import Tweet from "./Tweet";

function Header(){
  return (
    <React.Fragment>
      <NavBar />
      <Search />
      <Tweet />
    </React.Fragment>
  );
}

export default Header;