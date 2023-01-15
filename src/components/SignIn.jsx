import React from "react";
import "../css/signin.css";
import backgroundImg from "../images/Studying.gif";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";

function SignIn(props) {
  return (
    <div className="welcome-screen">
      <img
        src={backgroundImg}
        alt="Welcome-Screen"
        style={{ marginTop: "1rem" }}
      ></img>
      <Button
        variant="contained"
        style={{
          backgroundColor: "#f5ba13",
          fontSize: "1.3rem",
          marginTop: "1rem",
          fontFamily: "Open Sans",
          textTransform: "none",
        }}
        onClick={props.signInWithGoogle}
      >
        <GoogleIcon style={{ paddingRight: "0.5rem" }}></GoogleIcon>Sign In with
        Google
      </Button>
    </div>
  );
}

export default SignIn;
