import React, { useState } from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import "./App.css";
import InputArea from "./components/InputArea";

function App() {
  const [notesArray, updateNotesArray] = useState([]);

  function addNote(note) {
    updateNotesArray((prevNotesArray) => {
      return [...prevNotesArray, note];
    });
    // Call Backend to Store Notes here
  }

  return (
    <div>
      <Header></Header>
      <InputArea newNote={addNote} />
      <div className="container">
        {notesArray.map((noteItem) => {
          return <Note title={noteItem.title} content={noteItem.content} />;
        })}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
