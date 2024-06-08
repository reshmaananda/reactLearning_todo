import React from "react";
import { useState } from "react";
import TodoList from "./TodoList";
import Form from "./Form";
import Footer from "./Footer";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const completedTodos = todoList.filter((todo) => todo.done === true).length;
  const totalTodos = todoList.length;
  return (
    <div>
      <Form todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
};

export default Todo;
