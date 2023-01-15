import React from "react";
import "../css/header.css";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

function Header(props) {
  return (
    <div className="nav-bar">
      <h1 className="header">
        Notes-App
      </h1>
      {props.passLoginState ? (
        <LogoutOutlinedIcon
          style={{
            fontSize: "2rem",
            color:"white",
            backgroundColor:"skyblue",
            padding:"0.5rem",
            borderRadius:"1rem"
          }}
          onClick={props.signOut}
        >
        </LogoutOutlinedIcon>
      ) : null}
    </div>
  );
}

export default Header;
