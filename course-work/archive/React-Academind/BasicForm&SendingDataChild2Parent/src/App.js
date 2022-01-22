import "./styles.css";
import React, { useState } from "react";
import Form from "./components/Form";
export default function App() {
  const saveNameHandler = (n) => {
    const name = n;
    console.log(name);
  };
  return (
    <div className="App">
      <h1>Name printer</h1>
      <Form onSaveData={saveNameHandler} />
    </div>
  );
}
