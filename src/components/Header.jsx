import React from "react";
import "../css/header.css";
import logo from "../images/logo.png";

function Header() {
  return (
    <div className="nav-bar">
      <img src={logo} className="nav-logo" alt="Brand Logo"></img>
      <h1 className="header">Notes</h1>
    </div>
  );
}

export default Header;
