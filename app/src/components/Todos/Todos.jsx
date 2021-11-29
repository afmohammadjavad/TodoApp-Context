import React, { useContext, useState } from "react";
import { todosContext } from "../Contexts/TodosContext";
import Todo from "../Todo";
import "./Todos.css";

function Todos() {
  const [selectedToEdit, setSelectedToEdit] = useState({});

  const {todos, setTodos} = useContext(todosContext);

  if (!todos.length) return <div>Empty list</div>;

  const handleTextDecoration = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(newTodos);
  };

  const handleUpdateTodo = (newTodo) => {
    const updatedTodos = todos.map(todo => todo.id === newTodo.id ? newTodo : todo);
    setTodos(updatedTodos);
    setSelectedToEdit({});
  }

  return (
    <div className="todos">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleTextDecoration={() => handleTextDecoration(todo.id)}
          selectedToEdit={selectedToEdit}
          setSelectedToEdit={() => setSelectedToEdit(todo)}
          handleUpdateTodo={handleUpdateTodo}
        />
      ))}
    </div>
  );
}

export default Todos;
