import React from "react";
import styles from "./todoitem.module.css";

const TodoItem = ({ item, todoList, setTodoList }) => {
  function handleDelete(item) {
    setTodoList(todoList.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    const newTodoList = todoList.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodoList(newTodoList);
  }
  const className = item.done ? styles.itemCompleted : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.itemDelete}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.itemLine} />
    </div>
  );
};

export default TodoItem;
