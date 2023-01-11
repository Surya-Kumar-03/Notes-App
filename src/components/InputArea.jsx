import React, { useState } from "react";
import "../css/inputarea.css";
import NoteAddOutlinedIcon from "@mui/icons-material/NoteAddOutlined";

function InputArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  function expander() {
    setExpanded(true);
  }

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    expander();
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    props.newNote(note);
    setNote({
      content: "",
      title: "",
    });
  }

  return (
    <div>
      <form className="form form-input" id="input">
        {isExpanded ? (
          <input
            style={{ fontWeight: "bold" }}
            name="title"
            placeholder="Title here"
            value={note.title}
            onChange={handleChange}
          />
        ) : null}
        <textarea
          name="content"
          placeholder={isExpanded ? "Content here" : "Click to take a Note!"}
          rows={isExpanded ? "3" : "1"}
          value={note.content}
          onChange={handleChange}
          onClick={expander}
          autoFocus
        />
        {isExpanded ? (
          <button
            className="form-button"
            style={{ marginTop: "1rem" }}
            onClick={submitNote}
          >
            <NoteAddOutlinedIcon />
          </button>
        ) : null}
      </form>
    </div>
  );
}

export default InputArea;
