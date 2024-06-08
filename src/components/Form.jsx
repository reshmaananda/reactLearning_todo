import React from "react";
import { useState } from "react";
import styles from "./form.module.css";

const Form = ({ todoList, setTodoList }) => {
  //const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({
    name: "",
    done: false,
  });

  function handleSubmit(e) {
    e.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo({
      name: "",
      done: false,
    });
  }
  return (
    <div>
      <form className={styles.todoform} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            className={styles.input}
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            type="text"
            value={todo.name}
            placeholder="Enter todo item..."
          />
          <button className={styles.submitButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
