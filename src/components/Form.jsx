import React from "react";
import "../styles/Form.css";
import shortid from "shortid";

function Form({ todo, setTodo, todoList, setTodoList }) {
  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList([...todoList, {name: todo, id: shortid.generate()}]);
    setTodo("");
  };

  return (
    <div className="form">
      <form>
        <input
          value={todo}
          onChange={handleChange}
          type="text"
          placeholder="Add a task"
        />
      </form>
      <div className="btn">
        <button onClick={handleSubmit} className="btn-add">
          Add
        </button>
      </div>
    </div>
  );
}

export default Form;
