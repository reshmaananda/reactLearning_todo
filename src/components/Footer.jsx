import React from "react";
import styles from "./footer.module.css";

const Footer = ({ completedTodos, totalTodos }) => {
  return (
    <div className={styles.footer}>
      <span className={styles.todos}>Total Todos : {totalTodos} </span>
      <span className={styles.todos}>Completed Todos : {completedTodos}</span>
    </div>
  );
};

export default Footer;
