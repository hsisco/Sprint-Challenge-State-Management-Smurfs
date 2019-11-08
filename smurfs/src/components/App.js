import React from "react";
import Header from './Header';
import Form from "./Form";
import SmurfInfo from './SmurfInfo';
import "./App.css";

function App() {
    return (
      <div className="App">
        <Header/>
        <Form />
        <SmurfInfo />
      </div>
    );
  }

export default App;