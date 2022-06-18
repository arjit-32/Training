import "./styles.css";
import React, { useState } from "react";
import ListItem from "./components/ListItem";
import Input from "./components/input";
export default function App() {
  const [tasks, changeTask] = useState([
    { id: 1, task: "Learn React" },
    { id: 2, task: "Do not learn.." }
  ]);

  const addTask = (t) => {
    changeTask((prevState) => {
      return [...prevState, { id: Math.random.toString(), task: t }];
    });
  };

  const deleteTask = (id) => {
    changeTask((prevState) => {
      prevState.filter((t) => t.id !== id);
    });
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <Input onAddingTask={addTask} />
      <ListItem tasks={tasks} onDeletingTask={deleteTask} />
    </div>
  );
}
