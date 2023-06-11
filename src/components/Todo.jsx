import React from "react";
import "../styles/Todo.css";

function Todo({ todoItem, todoList, setTodoList }) {
  const handleSubmit = (event) => {
    setTodoList(todoList.filter((item) => item.id !== todoItem.id));
  };
  return (
    <div className="todo">
      <h3>{todoItem.name}</h3>
      <button onClick={handleSubmit} className="btn-rm ">
        Task completed
      </button>
    </div>
  );
}

export default Todo;
