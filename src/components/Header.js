import React from "react";
import NavBar from "./NavBar";
import Search from "./Search";
import Tweet from "./Tweet";

function Header(){
  const HeaderStyles = {
    backgroundColor: '#D3D3D3',
    fontFamily: 'sans-serif',
    paddingTop: '50px',
    borderColor: '#D3D3D3',
    borderBottom: '4px'
  }
  return (
    <div class="header-nav" style={HeaderStyles}>
      <React.Fragment>
        <NavBar />
        <Search />
        <Tweet />
      </React.Fragment>
    </div>
  );
}

export default Header;