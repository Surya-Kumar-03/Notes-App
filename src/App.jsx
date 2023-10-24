import React, { useState } from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import "./App.css";
import InputArea from "./components/InputArea";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import SignIn from "./components/SignIn";

import { useAuthState } from "react-firebase-hooks/auth";

//Firebase Code
firebase.initializeApp({
  apiKey: "AIzaSyB2FpzXBW0g_ityfWd3WMmsT44DRM3Agfg",
  authDomain: "notes-app-4d873.firebaseapp.com",
  projectId: "notes-app-4d873",
  storageBucket: "notes-app-4d873.appspot.com",
  messagingSenderId: "1096030593280",
  appId: "1:1096030593280:web:be52adcb5fc9b8bc0c53e5",
  measurementId: "G-6LE2WSQZJF",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function signInHelper() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
}

function signOutHelper(){
  auth.signOut();
}

function App() {
  const [loggedIn]  = useAuthState(auth); //true or false here
  const [notesArray, updateNotesArray] = useState([]);

  function addNote(note) {
    updateNotesArray((prevNotesArray) => {
      if (note.title === "" && note.content === "") return [...prevNotesArray];
      return [...prevNotesArray, note];
    });
    // Call Backend to Store Notes here
  }

  function deleteNote(id) {
    updateNotesArray((prevNotesArray) => {
      return notesArray.filter((noteItem, index) => {
        return index !== id;
      });
    });
    // Call Backend to Delete Note here
  }

  return (
    <div>
      <Header passLoginState={loggedIn} signOut={signOutHelper}></Header>
      {loggedIn ? <InputArea newNote={addNote} /> : null}
      {loggedIn ? (
        <div className="container">
          {notesArray.map((noteItem, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
              />
            );
          })}
        </div>
      ) : (
        <SignIn signInWithGoogle={signInHelper}/>
      )}
      <Footer></Footer>
    </div>
  );
}

export default App;
