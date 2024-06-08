import React from "react";
import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

const TodoList = ({ todoList, setTodoList }) => {
  const sortedTodoList = todoList
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedTodoList.map((todo) => (
        <TodoItem
          key={todo.name}
          item={todo}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </div>
  );
};

export default TodoList;
