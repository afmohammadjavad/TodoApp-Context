import React, { useContext, useState } from "react";
import { todosContext } from "../Contexts/TodosContext";
import { v4 as uuid } from "uuid";
import "./AddTodo.css";


function AddTodo() {
  const [title, setTitle] = useState("");

  const {todos, setTodos} = useContext(todosContext);

  const handleAddTodo = (title) => {
    const updatedTodos = [
      ...todos,
      { id: uuid(), title: title, completed: false },
    ];
    setTodos(updatedTodos);
  };

  return (
    <div className="add-todo">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="type here"
        style={{background: '#EFEFEF' ,padding: 7 ,marginRight: 10, border: 0}}
      />
      <button
        onClick={() => {
          handleAddTodo(title);
          setTitle("");
        }}
        style={{padding: 5, cursor: "pointer"}}
        disabled={title === "" ? true : false}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
