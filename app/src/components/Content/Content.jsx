import AddTodo from "../AddTodo";
import Todos from "../Todos/Todos";
import "./Content.css";

function Content() {
  return (
    <div className="content">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default Content;
