import React from "react";
import "../css/note.css";

function Note(received) {
  return (
    <div className="note">
      <h1>{received.title}</h1>
      <p>{received.content}</p>
    </div>
  );
}

export default Note;
