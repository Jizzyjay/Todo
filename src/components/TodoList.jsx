import React from "react";
import "../styles/TodoList.css";
import Todo from "./Todo";

function TodoList({ todoList, setTodoList }) {
  return (
    <div>
      {todoList.map((todoItem) => (
        <Todo key={todoItem.id} todoItem={todoItem} setTodoList={setTodoList} todoList={todoList} />
      ))}
    </div>
  );
}

export default TodoList;
