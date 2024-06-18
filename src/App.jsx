import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const todoList = [
  {
    id: 1,
    title: "todo 1",
  },
  {
    id: 2,
    title: "todo 2",
  },
  {
    id: 3,
    title: "todo 3",
  },
];

function App() {
  return (
    <div id="root">
      <h1>Todo List</h1>
      <ul>
        {todoList.map(function (todo) {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
