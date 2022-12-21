import React from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <Note></Note>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
