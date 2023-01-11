import React from "react";
import "../css/note.css";
import "../css/deletebutton.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="delete-btn" onClick={handleClick}>
        <DeleteOutlineOutlinedIcon />
      </button>
    </div>
  );
}

export default Note;
