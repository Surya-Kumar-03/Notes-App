import React from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import "./App.css";
import notes from "./components/notes";
import InputArea from "./components/InputArea";

function App() {
  return (
    <div>
      <Header></Header>
      <InputArea />
      <div className="container">
        {notes.map((noteItem) => (
          <Note
            key={noteItem.key}
            title={noteItem.title}
            content={noteItem.content}
          />
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
