import React from "react";
import "../css/note.css";
import DeleteButton from "./DeleteButton";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <DeleteButton/>
    </div>
  );
}

export default Note;
