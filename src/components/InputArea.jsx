import React, { useState } from "react";
import "../css/inputarea.css";

function InputArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
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
        <input
          style={{ fontWeight: "bold" }}
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Notes"
          rows="3"
          value={note.content}
          onChange={handleChange}
        />
        <button
          className="form-button"
          style={{ marginTop: "1rem" }}
          onClick={submitNote}
        >
          Add Note
        </button>
      </form>
    </div>
  );
}

export default InputArea;
