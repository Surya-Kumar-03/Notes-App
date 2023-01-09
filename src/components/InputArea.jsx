import React from "react";
import "../css/inputarea.css";

function InputArea() {
  return (
    <div>
      <form className="form form-input" id="input">
        <input
          name="title"
          placeholder="Title"
          style={{ fontWeight: "bold" }}
        />
        <textarea name="content" placeholder="Notes" rows="3" />
        <button className="form-button" style={{ marginTop: "1rem" }}>
          Add Note
        </button>
      </form>
    </div>
  );
}

export default InputArea;
