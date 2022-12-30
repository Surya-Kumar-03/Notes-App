import React from "react";
import "../css/header.css";
import logo from "../images/logo.png";

function Header() {
  return (
    <div className="nav-bar">
      <h1 className="header">Your Notes</h1>
      <img src={logo} className="nav-logo"></img>
    </div>
  );
}

export default Header;
