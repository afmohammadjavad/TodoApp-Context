import React, { useState } from "react";
import "./Todo.css";
import {
  DeleteOutlined,
  PlusCircleTwoTone,
  EditOutlined,
} from "@ant-design/icons";

function Todo({
  todo,
  handleTextDecoration,
  selectedToEdit,
  setSelectedToEdit,
  handleUpdateTodo,
}) {
  const [inputText, setInputText] = useState(todo.title);

  return (
    <div className="todo">
      <span style={{ textDecoration: todo.completed ? "line-through" : "" }}>
        {todo.id === selectedToEdit.id ? (
          <span>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              style={{ padding: 2, border: "1px solid", marginRight: 10 }}
            />
            <button
              style={{ cursor: "pointer" }}
              onClick={() => handleUpdateTodo({...todo, title: inputText})}
            >
              Save
            </button>
          </span>
        ) : (
          todo.title
        )}
      </span>
      <span>
        <EditOutlined
          style={{ marginLeft: 10, fontSize: 20 }}
          onClick={setSelectedToEdit}
        />
        {todo.completed ? (
          <PlusCircleTwoTone
            style={{ color: "green", marginLeft: 10, fontSize: 20 }}
            onClick={handleTextDecoration}
          />
        ) : (
          <DeleteOutlined
            style={{ color: "red", marginLeft: 10, fontSize: 20 }}
            onClick={handleTextDecoration}
          />
        )}
      </span>
    </div>
  );
}

export default Todo;
